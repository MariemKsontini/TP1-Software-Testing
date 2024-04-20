# TP-Tests-Logiciels: Learning Unit Testing with Vitest

## Overview
This training project is designed to help learners understand the importance of unit tests in software development, learn how to write unit tests in JavaScript, and master the use of Vitest for running these tests.

## Objectives
- Understand the role of unit testing in software development.
- Learn to write unit tests in JavaScript.
- Master Vitest for test execution.

## Estimated Duration
3 hours

## Setup
Before starting, ensure you have Node.js installed on your system. This project requires Node.js and npm (Node package manager).

### Installation of Vitest
Navigate to your project directory and run:
```bash
npm install -D vitest
```

Add the following scripts to your `package.json`:
```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:coverage": "vitest --coverage"
}
```

## Test Plan

### Introduction to Unit Testing
- **Definition and Importance**: Unit tests are tests written to check the functionality of a specific section of code, usually functions or methods, independently from other parts.
- **Vitest Introduction**: Vitest is a modern testing framework that supports the latest JavaScript and TypeScript setups.

### Exercise and Activity Details

#### Activity 1: Basic Setup
1. Create a new project directory and initialize it with `npm init`.
2. Create a `math.js` file with a simple function `add` that sums two numbers.
3. Set up a `test` directory with `math.test.js` to test the `add` function.
4. Write and run tests using the commands provided in the setup section.
   - Insert a screenshot of your terminal showing the test results here: `<!-- Insert screenshot of npm run test -->`

#### Exercise 1: String Manipulation Function
- **Objective**: Write unit tests for a function that transforms a string into uppercase.
- **Implementation**: Test the function with empty strings, lowercase letters, and strings with special characters.
- **Validation**: Use various assertions to confirm the function's correct behavior under different conditions.
  - Insert a screenshot of your terminal showing the test results and coverage for this exercise here: `<!-- Insert screenshot of npm run test:coverage for string manipulation tests -->`

#### Exercise 2: Sorting Function
- **Objective**: Develop and test a sorting function that organizes an array of numbers in ascending order.
- **Testing**: Cover typical sorted arrays, reverse arrays, and edge cases with non-numeric values.
  - Insert a screenshot of your terminal showing the test results for sorting function here: `<!-- Insert screenshot here -->`

#### Exercise 3: Boundary Testing
- **Objective**: Test the `isPriceInRange` function to ensure it accurately identifies if a price is within a specified range.
- **Testing Strategy**: Write tests that cover exactly at the boundary conditions and outside them.
  - Insert a screenshot of the terminal output for boundary testing here: `<!-- Insert screenshot here -->`

#### Managing Asynchronous Functions
- **Asynchronous Testing**: Learn how to handle tests involving asynchronous functions like API calls using `await` and handle errors properly with `try/catch`.
- **Example**: A function `fetchData` is used to demonstrate fetching data asynchronously from an API and handling potential errors.
  - Insert a screenshot of your terminal showing the asynchronous function test results here: `<!-- Insert screenshot here -->`

### Final Task
Select a personal or open-source project and write at least three unit tests for it, then run these tests including coverage calculation.

### Running Code Coverage
To check how much of your code is covered by tests, use:
```bash
npm run test:coverage
```
- Insert a screenshot of your code coverage report here: `<!-- Insert screenshot of code coverage report -->`
