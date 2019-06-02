# notepad

## Install dependencies
```
    npm install
```

## Run the application
```
    npm start
```

## Navigate to:
```
    localhost:8080
```

## Run tests
The application is covered with tests, please run them by typing:
```
    npm run test
```
A coverage report will be displayed after the execution.

## Technical considerations:
* **Development server:** The development server is a simple express static server.
* **Building process:** The building process is handled entirely by Webpack.
* **Resources Management:** The javascript and css are bundled and there is only one file of each asset downloading to the client.
* **CSS Preprocessor:** The preprocessor used is SASS.
* **CSS Codestyle:** The CSS code is organized according to [BEM](http://getbem.com/introduction/).
* **Javascript Code style:** The aplication is compliant with eslint, the style rules were extended from the [Airbnb recommended code styles rules for Javascript and React](https://github.com/airbnb/javascript)
* **Web Application:** The application was implemented with React and using Redux to handle the state. The animations are functional, by using the __React-Transition-Group component__. The animations themselves are implemented with the [GreenSock library](https://greensock.com/).
* **Requirements:** The required and optional features have been implemented. The application is responsive.