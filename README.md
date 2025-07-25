# JavaScript Fundamentals

Hopefullt these coding challenge project help give me some feedback

## Project Structure

```
js-fundamentals-jest/
├── src/
│   ├── conditionals.js         # If/else functions
│   ├── loops.js                # Loop functions
│   ├── arrays.js               # Array manipulation functions
├── tests/
│   ├── conditionals.test.js    # Tests for if/else functions
│   ├── loops.test.js           # Tests for loop functions
│   ├── arrays.test.js          # Tests for array functions
├── package.json                # Project configuration
├── jest.config.js              # Jest test configuration
└── README.md                   # This file
```

## Setup Instructions

### Getting Started

1. **Fork this repo** and clone it
2. **Open the repo in VS Code**
3. **Open terminal in VS Code**
4. **Install dependencies**: Run this command in the terminal
   ```bash
   npm install
   ```
5. **Run tests**:
   ```bash
   npm test
   ```

## How to Complete the Tests

### Step 1: Understand the Workflow

1. **Write your functions** in `solutions.js`
2. **Run tests** with `npm test` to see results
3. **Fix failing tests** and repeat until all pass

### Step 2: Test-Driven Development

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs when you save files)
npm run test:watch

# Run a specific test file
npm test <test file name>
# for example -> npm run loops

# Run tests with detailed output
npm run test:verbose
```

```
# !!! 🚨 IMPORTANT IF IT GETS TOO OVERWHELMING NEXT THE TEST OR DESCRIBE WORDS IN THE TEST FILES ADD A .only
```

### Step 3: Reading Test Results

```
✓ PASS  tests/conditionals.test.js
✗ FAIL  tests/loops.test.js
  ● sumNumbers should handle edge cases
    Expected: 0
    Received: undefined
```
