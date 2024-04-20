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

<!-- Insert a screenshot from your terminal showing the test results for Activity 1 here -->

![Screenshot from 2024-04-20 12-18-05](https://github.com/MariemKsontini/TP1-Software-Testing/assets/98924792/3c521cc3-145a-41e4-bf23-fe1904aca3e1)

#### Exercise 1: String Manipulation Function
- **Objective**: Write unit tests for a function that transforms a string into uppercase.
- **Implementation**: Test the function with empty strings, lowercase letters, and strings with special characters.
- **Validation**: Use various assertions to confirm the function's correct behavior under different conditions.

<!-- Insert a screenshot from your terminal showing the test results for Exercise 1 here -->

![Screenshot from 2024-04-20 12-18-52](https://github.com/MariemKsontini/TP1-Software-Testing/assets/98924792/6a4cb128-d3e2-4825-8b7e-b59f8caecc4f)

#### Exercise 2: Sorting Function
- **Objective**: Develop and test a sorting function that organizes an array of numbers in ascending order.
- **Testing**: Cover typical sorted arrays, reverse arrays, and edge cases with non-numeric values.

<!-- Insert a screenshot from your terminal showing the test results for Exercise 2 here -->

![Screenshot from 2024-04-20 12-19-07](https://github.com/MariemKsontini/TP1-Software-Testing/assets/98924792/e0f1d4f9-1291-4865-8dec-424d5290985a)

#### Exercise 3: Boundary Testing
- **Objective**: Test the `isPriceInRange` function to ensure it accurately identifies if a price is within a specified range.
- **Testing Strategy**: Write tests that cover exactly at the boundary conditions and outside them.

<!-- Insert a screenshot from your terminal showing the test results for Exercise 3 here -->

![Screenshot from 2024-04-20 12-19-38](https://github.com/MariemKsontini/TP1-Software-Testing/assets/98924792/07c22308-82f1-4be8-82ef-ff458f0f26e9)

#### Managing Asynchronous Functions
- **Asynchronous Testing**: Learn how to handle tests involving asynchronous functions like API calls using `await` and handle errors properly with `try/catch`.
- **Example**: A function `fetchData` is used to demonstrate fetching data asynchronously from an API and handling potential errors.

<!-- Insert a screenshot from your terminal showing the test results for the asynchronous function here -->

![Screenshot from 2024-04-20 12-20-08](https://github.com/MariemKsontini/TP1-Software-Testing/assets/98924792/48077b82-b9a3-4daf-a7f5-34bf3f69fe0b)

Certainly! Here's how you could document the final task in your README.md, detailing the steps taken to write unit tests for the simple calculator project:

### Final Task: Unit Testing a Simple JavaScript Calculator

For the final task, we selected a simple calculator project that performs basic arithmetic operations. The objective was to create unit tests for this project and run these tests with code coverage.

#### Implementation Steps

1. **Project Structure**:
    - We organized the project into separate files for cleaner code and easier testing. The core calculator functions were placed in `calculator.js` within the `src` directory.

2. **Writing Tests**:
    - We created a test file `calculator.test.js` within the `tests` directory. Here we wrote tests for basic operations such as addition, subtraction, multiplication, and division.

3. **Testing Edge Cases**:
    - Special attention was given to edge cases, such as division by zero, to ensure the calculator handles errors gracefully.

4. **Running the Tests**:
    - We ran the tests using Vitest by executing `npm run test` from the command line.

5. **Calculating Test Coverage**:
    - To ensure that our tests were comprehensive, we ran `npm run test:coverage`. This command generates a report that shows which parts of the code are covered by tests.

#### Example Tests

Here are some examples of the tests we implemented:

```javascript
import { expect, test } from 'vitest';
import { add, subtract, multiply, divide } from '../src/calculator';

test('adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('divides two numbers', () => {
  expect(divide(8, 2)).toBe(4);
});

test('throws an error when dividing by zero', () => {
  expect(() => divide(4, 0)).toThrow("Divide by zero error");
});
```

#### Running Tests and Checking Code Coverage

The calculator's core logic is tested to verify that it performs calculations correctly. To run these tests and check code coverage:

```bash
npm run test
```

To generate a coverage report:

```bash
npm run test:coverage
```

#### Test Results

<!-- Insert a screenshot from your terminal showing the test results for the calculator here -->
![Screenshot from 2024-04-20 13-08-03](https://github.com/MariemKsontini/TP1-Software-Testing/assets/98924792/5f09c05b-a5aa-42c3-8acf-0846c4c8e9d0)

#### Code Coverage Report

The code coverage report helps identify how much of our codebase is tested.

<!-- Insert a screenshot from your terminal showing the code coverage report for the calculator here -->
![Screenshot from 2024-04-20 13-09-11](https://github.com/MariemKsontini/TP1-Software-Testing/assets/98924792/7ab66231-c676-4142-bdd6-538bb1f5a1bf)

The completion of these tests ensures that each function in the calculator operates as expected, providing confidence in the reliability of the application.
