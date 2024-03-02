import React, { useState } from 'react';
import axios from 'axios';
import './CatExplorer.css'; // Make sure to style your component similarly to the provided design

const CatExplorer = () => {
    const [currentCat, setCurrentCat] = useState(null);
    const [banList, setBanList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCat = async () => {
        setLoading(true);
        try {
            const params = {
                limit: 1, // Assuming the API allows you to limit the results
                // Add any other parameters you might need
            };
            banList.forEach((country) => {
                params[`exclude_country[]`] = country; // Assuming the API allows excluding by country
            });
            const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
                params,
                headers: {
                    'x-api-key': import.meta.env.VITE_APP_ACCESS_KEY // Ensure you have the API key in your .env
                }
            });
            // Assuming the API returns an array of cats
            if (response.data.length > 0) {
                setCurrentCat(response.data[0]);
            } else {
                console.log('No cats available after filtering.');
            }
        } catch (error) {
            console.error('Error fetching cat data:', error);
        } finally {
            setLoading(false);
        }
    };

    const addToBanList = (attribute) => {
        setBanList([...banList, attribute]);
    };

    return (
        <div className="cat-explorer">
            <div className="discover-section">
                <button onClick={fetchCat} disabled={loading}>
                    {loading ? 'Loading...' : 'Discover!'}
                </button>
                {currentCat && (
                    <div className="cat-details">
                        <h2>{currentCat.name}</h2>
                        <img src={currentCat.url} alt={`A cat named ${currentCat.name}`} />
                        <div className="attributes">
                            <span onClick={() => addToBanList(currentCat.breed)}>{currentCat.breed}</span>
                            <span onClick={() => addToBanList(currentCat.weight)}>{currentCat.weight}</span>
                            <span onClick={() => addToBanList(currentCat.country)}>{currentCat.country}</span>
                            <span onClick={() => addToBanList(currentCat.age)}>{currentCat.age}</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="ban-list">
                <h3>Ban List</h3>
                <ul>
                    {banList.map((attribute, index) => (
                        <li key={index}>{attribute}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CatExplorer;