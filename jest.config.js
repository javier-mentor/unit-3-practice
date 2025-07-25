module.exports = {
  // Test environment
  testEnvironment: "node",

  // Test file patterns
  testMatch: ["**/tests/**/*.test.js"],

  // Coverage settings
  collectCoverageFrom: ["src/**/*.js", "!src/**/*.test.js"],

  // Coverage thresholds (optional - uncomment to require minimum coverage)
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80
  //   }
  // },

  // Display settings
  verbose: false,

  // Clear mocks between tests
  clearMocks: true,

  // Error handling
  errorOnDeprecated: true,

  // Custom test timeout (5 seconds)
  testTimeout: 5000,

  // Display individual test results
  reporters: ["default"],
};
