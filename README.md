# JavaScript Testing Practice

A collection of JavaScript utility functions with comprehensive test suites using Jest. This project demonstrates Test-Driven Development (TDD) principles by implementing various JavaScript functions along with their test cases.

## Functions Implemented

This project contains the following JavaScript utility functions:

1. **Calculator** - A calculator object with add, subtract, multiply, and divide methods
2. **Capitalize** - A function that capitalizes the first character of a string
3. **Reverse String** - A function that reverses a given string
4. **Caesar Cipher** - An implementation of the Caesar cipher encryption technique
5. **Array Analyzer** - A function that analyzes an array and returns an object with average, min, max, and length properties

Each function has a corresponding test file to verify its functionality.

## Project Setup

To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/jbb-codes/testing-practice.git
   cd testing-practice
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running Tests

This project uses Jest for testing. You can run the tests using the following commands:

- Run all tests once:
  ```
  npm test
  ```

- Run tests in watch mode (tests will automatically rerun when files change):
  ```
  npm run watch
  ```

## Project Structure

```
testing-practice/
├── analyzeArray.js         # Array analyzer implementation
├── analyzeArray.test.js    # Tests for array analyzer
├── caesarCipher.js         # Caesar cipher implementation
├── caesarCipher.test.js    # Tests for Caesar cipher
├── calculator.js           # Calculator object implementation
├── calculator.test.js      # Tests for calculator
├── capitalize.js           # Capitalize function implementation
├── capitalize.test.js      # Tests for capitalize function
├── reverseString.js        # Reverse string implementation
├── reverseString.test.js   # Tests for reverse string
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Testing Framework

This project uses [Jest](https://jestjs.io/), a delightful JavaScript Testing Framework with a focus on simplicity.

Features of Jest used in this project:
- Simple test cases with `test()` and `expect()`
- Matchers like `toBe()`, `toBeCloseTo()`, etc.
- Automatic test discovery
- Watch mode for development

## Repository

- GitHub Repository: [https://github.com/jbb-codes/testing-practice](https://github.com/jbb-codes/testing-practice)
- Issues: [https://github.com/jbb-codes/testing-practice/issues](https://github.com/jbb-codes/testing-practice/issues)
