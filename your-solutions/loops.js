/**
 * 🚀 Loops - For and While Loops
 *
 * Learn how to repeat code efficiently using loops.
 * Run `npm test loops` to check your progress.
 */

/**
 * Calculates the sum of all integers from 1 to n
 * @param {number} n - The upper limit (inclusive)
 * @returns {number} Sum of 1+2+3+...+n
 *
 * Examples:
 * - sumNumbers(5) returns 15 (1+2+3+4+5)
 * - sumNumbers(1) returns 1
 * - sumNumbers(0) returns 0
 * - sumNumbers(10) returns 55
 *
 * Hint: Use a for loop to iterate from 1 to n
 */
function sumNumbers(n) {
  // TODO: Use a for loop to calculate the sum
  // Handle edge cases: zero, negative numbers, non-integers
}

/**
 * Creates an array counting down from start to 1
 * @param {number} start - Starting number
 * @returns {number[]} Array of numbers counting down
 *
 * Examples:
 * - countdown(5) returns [5, 4, 3, 2, 1]
 * - countdown(1) returns [1]
 * - countdown(0) returns []
 * - countdown(3) returns [3, 2, 1]
 *
 * Hint: Use a while loop and push numbers to an array
 */
function countdown(start) {
  // TODO: Use a while loop to build the countdown array
  // Handle edge cases: zero, negative numbers
}

// Export functions for testing
module.exports = {
  sumNumbers,
  countdown,
};
