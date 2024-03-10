# Web Development Project 4 - *API Project*

Submitted by: **Chase Moffat**

This web app: My project is stumbleupon clone made using the cat API. My app works by having a button that the user can click to display a cat. The Cats image, name, origin, and lifespan are displayed. Users are able to click on these attributes and add them to a ban list. Adding attributes to the ban list will filter the next API call results to only show a cat without the banned attributes. I accomplished this by having a fetch cat fucntion. The fetch cat fucntion has a while loop that searchs for cats 10 times before breaking. I added this feature as a way to ensure that cats with banned atributes are not displayed. So how it works is the loop will call the api end point and return get a response. This response is then checked to see if the cats name, origin, or lifespan are in the ban list. if the attributes arent in the ban list then that cat is displayed. If they are in the ban list, the loop runs again and new api call is made with a diffrent cat. 

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [x] Multiple types of attributes can be added to the ban list
- [ ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Video Walkthrough](https://github.com/COP4808-Spring2024-Full-Stack-Webdev/hw4-Chasem11/blob/main/src/assets/project4.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
