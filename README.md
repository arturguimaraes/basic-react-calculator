# React Basic Calculator

This is a basic calculator application built using React and TypeScript. It allows users to perform simple arithmetic operations and has additional features like percentage calculation and support for Playwright tests.

## Live Application

Click [here](https://arturguimaraes.github.io/basic-react-calculator/) to go to the application.

![basic-react-calculator](https://github.com/arturguimaraes/basic-react-calculator/blob/main/src/assets/mobile.png?raw=true)

![basic-react-calculator](https://github.com/arturguimaraes/basic-react-calculator/blob/main/src/assets/pc.png?raw=true)

## Template Usage

To create this application, the developer used the create-react-app command and added the Typescript template by running:

`npx create-react-app react-basic-calculator --template typescript`

## Extra Packages

This project uses the following additional packages:

- Sass: For styling the components.
- React Redux and Reduxjs Toolkit: To manage application state.
- Uuid: To generate unique ids.
- Playwright: To automate end-to-end testing.

## Installation

To install all required packages, navigate to the project directory in your terminal and run:

`npm install`

To start the application, run:

`npm start`

## Basic Usage

The calculator works similar to others. To use it, first input a number, then select an operator, and then input another number. Press '=' to get the result or continue pressing other operators to perform further calculations.

Please note that if you input a number after pressing '=', your previous sum will be lost. To use the percentage button, first input the percentage number, then press '%', then input the number you want to calculate the percentage of, and finally press '='. For example, to calculate 10% of 500, input "10", press "%", input "500", and then press "=" to get the result, which should be 50. The AC button clears everything.

## Playwright Tests

To run the Playwright tests, first start the application by running:

`npm start`

Then, in a separate terminal window, run:

`npm run playwright`

A report in HTML format will be automatically generated and opened in your default browser. If the report does not open, run:

`npm run playwright-report`

![basic-react-calculator](https://github.com/arturguimaraes/basic-react-calculator/blob/main/src/assets/tests.png?raw=true)

Alternatively, you can navigate to the 'playwright-report' folder and manually open the generated file.

To quit the tests, press Ctrl + C.

For more information on Playwright, please visit [https://playwright.dev/](https://playwright.dev/).
