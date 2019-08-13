# TenderApp

### Installation

```sh
$ git clone git@github.com:samayo/TenderApp.git
$ cd TenderApp
$ npm install
$ npm run start
```
 Note: Please allow at first 10 seconds for the backend server to respond, heroku dyno goes to sleep every hour

### Tools
List of tools, frameworks and libraries used for the front and the backend
##### Frontend
* create-react-app - For the web app. Reason: Its easy, preconfigured, officially supported
* Axios - For making API requests. Reason: Its popular, good library I have worked with in the past
* Formik - To build the tender forms. Reason: Popular in react community and used by mainy developers
* Yup - For input validation. Reason: Popular in react community and used by mainy developers
* Bulma - For layout and styling. Reason: Very simple, modular and modern framework 
##### Backend
* Express - Backend server hosted in heroku https://tenera.herokuapp.com 
* Mlab.com - Data Storage   
* Mongoose - Database

Example get request from API
https://tenera.herokuapp.com/tender/list

### Todos
I have listed my todos on https://github.com/samayo/TenderApp/issues
These are features not yet implemented (tests, i18n..) mainly because of time or I don't have the required skills yet, so 
it requires time to learn and implement the feature. 
I have labeled "help-wanted" for todos I don't know how to do yet, so they require to learn and implement. 
I have labeled "won't fix" for todos I can implement but requires more time, it's not because I refuse to fix it :)


Anything I have not mentioned is likely, because I don't know about it, so that will give you about what I don't know 
at this point. And that will provide a scope of my knowledge (and lack of) react specially. 

### Challenges
* Some of the time was spent initially searching for online commodity API providers the best I could find was similar to quandl.com but they only provide commodities, I understood later there are no online API that mock country tender with GET, POST, PUT requests
* Most of time of spent re-writting the app. At first it was basic and I didn't use seperate components but as I learned I more I started re-writting it several times. 
* As for *bugs* almost all bugs were related to the form and using Formik. It was difficult to understand how Formik worked because the documentation was very brief and it assumed some knowledge about reqct, so I spent about 2 days on the form alone. 


