# Step project_Instagram Client-side

This is the client-side of the web application, an Instagram-like app. It provides the user interface and interacts with the server-side to fetch and display data. Below you will find instructions on how to run the project and an overview of its structure.

## Installation

To install the necessary dependencies, run the following command in the project's root directory:

```sh
npm install
```
This will install all the required packages listed in the package.json file.

## Starting the Client-side

To start the client-side, run the following command:

```sh
npm start
```

## Project Structure

The client-side code is organized as follows:

- src/: Contains the source code files.
  - api/: Handles API requests to the server.
  - components/: Includes reusable React components used throughout the app.
  - pages/: Defines the main pages of the application.
  - store/: Determines the global state of the application.
  - assets/: Contains utility functions and functions for API requests to the server.
  - App.js: The root component of the application.
  - index.js: Entry point of the application.

## Testing

The client-side code can be tested using unit tests. To run the tests, use the following command:

```sh
npm test
```
