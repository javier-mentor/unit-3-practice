/**
 * 🚀 Arrays - Working with Lists of Data
 *
 * Learn how to manipulate and work with arrays using loops and conditions.
 * Run `npm test arrays` to check your progress.
 */

/**
 * Finds the maximum value in an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The largest number in the array
 *
 * Examples:
 * - findMax([3, 7, 2, 9, 1]) returns 9
 * - findMax([-1, -5, -2]) returns -1
 * - findMax([5]) returns 5
 * - findMax([10, 5, 8]) returns 10
 *
 * Hint: Use a loop to compare each element
 */
function findMax(numbers) {
  // TODO: Find the maximum value using a loop
  // Handle edge cases: empty arrays, negative numbers, duplicates
}

/**
 * Filters an array to return only even numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} New array containing only even numbers
 *
 * Examples:
 * - getEvenNumbers([1, 2, 3, 4, 5, 6]) returns [2, 4, 6]
 * - getEvenNumbers([1, 3, 5]) returns []
 * - getEvenNumbers([]) returns []
 * - getEvenNumbers([2, 4, 8]) returns [2, 4, 8]
 *
 * Hint: Use a loop and the % operator to check if number % 2 === 0
 */
function getEvenNumbers(numbers) {
  // TODO: Filter even numbers using a loop and % operator
  // Handle edge cases: empty arrays, all odd numbers, all even numbers
}

/**
 * Counts words that meet a minimum length requirement
 * @param {string[]} words - Array of words
 * @param {number} minLength - Minimum word length
 * @returns {number} Count of words with length >= minLength
 *
 * Examples:
 * - countLongWords(["cat", "dog", "elephant"], 4) returns 1
 * - countLongWords(["hello", "world"], 5) returns 2
 * - countLongWords([], 3) returns 0
 * - countLongWords(["a", "bb", "ccc"], 2) returns 2
 *
 * Hint: Use a loop and check each word's .length property
 */
function countLongWords(words, minLength) {
  // TODO: Count words meeting length requirement
  // Handle edge cases: empty arrays, empty strings, zero minLength
}

// Export functions for testing
module.exports = {
  findMax,
  getEvenNumbers,
  countLongWords,
};
