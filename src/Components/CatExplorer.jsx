import React, { useState } from 'react';
import axios from 'axios';
import './CatExplorer.css';

const CatExplorer = () => {
    const [currentCat, setCurrentCat] = useState(null);
    const [banList, setBanList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCat = async () => {
        setLoading(true);
        let attempts = 0;

        try {
            const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
            
            while (attempts < 10) {
                const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
                    headers: {'x-api-key': API_KEY},
                    params: {has_breeds: 1, limit: 1}
                });

                if (response.data.length > 0 && response.data[0].breeds && response.data[0].breeds.length > 0) {
                    const catData = response.data[0];
                    const breedData = catData.breeds[0];

                    if (!banList.includes(breedData.name) && !banList.includes(breedData.origin) && !banList.includes(breedData.life_span)) {
                        setCurrentCat({
                            name: breedData.name,
                            origin: breedData.origin,
                            lifeSpan: breedData.life_span,
                            image: catData.url
                        });
                        break;
                    }
                } else {
                    console.log('Cat with no breed information, fetching another.');
                }

                attempts++;
            }

            if (attempts >= 10) {
                console.error('Failed to find a suitable cat after multiple attempts.');
                setCurrentCat(null);
            }
        } catch (error) {
            console.error('Failed to fetch cat:', error);
            setCurrentCat(null);
        } finally {
            setLoading(false);
        }
    };

    const addToBanList = (attributeValue) => {
        if (!banList.includes(attributeValue)) {
            setBanList([...banList, attributeValue]);
        }
    };

    return (
        <div className='cat-explorer'>
            {loading && <p>Loading...</p>}
            {currentCat && (
                <div>
                    <h1>{currentCat.name}</h1>
                    <img src={currentCat.image} alt={`A cat named ${currentCat.name}`} className="cat-image" />
                    <div>
                        <button onClick={() => addToBanList(currentCat.origin)}>Ban Origin: {currentCat.origin}</button>
                        <button onClick={() => addToBanList(currentCat.lifeSpan)}>Ban Life Span: {currentCat.lifeSpan}</button>
                        <button onClick={() => addToBanList(currentCat.name)}>Ban Name: {currentCat.name}</button>
                    </div>
                </div>
            )}
            <button onClick={fetchCat} disabled={loading}>
                Discover Another Cat!
            </button>
            <div className='ban-list'>
                <h2>Ban List</h2>
                {banList.map((item, index) => (
                    <p key={index}>{item}</p> 
                ))}
            </div>
        </div>
    );
};

export default CatExplorer;