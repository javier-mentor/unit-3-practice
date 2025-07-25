/**
 * JavaScript Array Methods - Practice with Built-in Array Functions
 *
 * Learn how to use JavaScript's powerful built-in array methods.
 * Run `npm test array-methods` to check your progress.
 */

// =============================================================================
// ARRAY MODIFICATION METHODS
// =============================================================================

/**
 * Adds elements to the beginning of an array using unshift()
 * @param {any[]} array - Original array
 * @param {...any} elements - Elements to add to the beginning
 * @returns {any[]} New array with elements added to start
 *
 * Examples:
 * - addToStart([2, 3, 4], 1) returns [1, 2, 3, 4]
 * - addToStart(['b', 'c'], 'a') returns ['a', 'b', 'c']
 * - addToStart([1, 2], 'x', 'y') returns ['x', 'y', 1, 2]
 */
function addToStart(array, ...elements) {
  // TODO: Use unshift() to add elements to the beginning
  // Remember: don't modify the original array!
}

/**
 * Removes and returns the last element using pop()
 * @param {any[]} array - Array to remove from
 * @returns {Object} Object with removed element and resulting array
 *
 * Examples:
 * - removeFromEnd([1, 2, 3]) returns { removed: 3, array: [1, 2] }
 * - removeFromEnd([]) returns { removed: undefined, array: [] }
 */
function removeFromEnd(array) {
  // TODO: Use pop() to remove last element
  // Return both the removed element and the new array
}

/**
 * Removes and returns the first element using shift()
 * @param {any[]} array - Array to remove from
 * @returns {Object} Object with removed element and resulting array
 *
 * Examples:
 * - removeFromStart([1, 2, 3]) returns { removed: 1, array: [2, 3] }
 */
function removeFromStart(array) {
  // TODO: Use shift() to remove first element
  // Return both the removed element and the new array
}

/**
 * Adds elements to the end of an array using push()
 * @param {any[]} array - Original array
 * @param {...any} elements - Elements to add to the end
 * @returns {any[]} New array with elements added to end
 *
 * Examples:
 * - addToEnd([1, 2], 3, 4) returns [1, 2, 3, 4]
 */
function addToEnd(array, ...elements) {
  // TODO: Use push() to add elements to the end
  // Remember: don't modify the original array!
}

// =============================================================================
// ARRAY ACCESS METHODS
// =============================================================================

/**
 * Extracts a section of an array using slice()
 * @param {any[]} array - Array to slice from
 * @param {number} start - Start index (inclusive)
 * @param {number} end - End index (exclusive)
 * @returns {any[]} New array containing the extracted elements
 *
 * Examples:
 * - getSlice([1, 2, 3, 4, 5], 1, 4) returns [2, 3, 4]
 * - getSlice(['a', 'b', 'c'], -2) returns ['b', 'c']
 */
function getSlice(array, start, end) {
  // TODO: Use slice() to extract portion of array
}

/**
 * Removes elements and inserts new ones using splice()
 * @param {any[]} array - Array to modify
 * @param {number} start - Index to start at
 * @param {number} deleteCount - Number of elements to remove
 * @param {...any} items - Items to insert
 * @returns {Object} Object with removed elements and resulting array
 *
 * Examples:
 * - removeAndInsert([1, 2, 3, 4], 1, 2, 'a', 'b') returns { removed: [2, 3], array: [1, 'a', 'b', 4] }
 */
function removeAndInsert(array, start, deleteCount, ...items) {
  // TODO: Use splice() to remove and insert elements
  // Return both removed elements and the new array
}

// =============================================================================
// ARRAY UTILITY METHODS
// =============================================================================

/**
 * Combines multiple arrays using concat()
 * @param {...any[]} arrays - Arrays to combine
 * @returns {any[]} New array with all elements combined
 *
 * Examples:
 * - combineArrays([1, 2], [3, 4], [5]) returns [1, 2, 3, 4, 5]
 */
function combineArrays(...arrays) {
  // TODO: Use concat() to combine all arrays
}

/**
 * Reverses an array using reverse()
 * @param {any[]} array - Array to reverse
 * @returns {any[]} New array with elements in reverse order
 *
 * Examples:
 * - reverseArray([1, 2, 3]) returns [3, 2, 1]
 */
function reverseArray(array) {
  // TODO: Use reverse() to reverse the array
  // Remember: don't modify the original array!
}

/**
 * Sorts numbers in ascending order using sort()
 * @param {number[]} numbers - Array of numbers to sort
 * @returns {number[]} New array with numbers sorted in ascending order
 *
 * Examples:
 * - sortNumbers([3, 1, 4, 1, 5]) returns [1, 1, 3, 4, 5]
 *
 * Important: sort() by default sorts as strings, so use a comparison function!
 */
function sortNumbers(numbers) {
  // TODO: Use sort() with a comparison function for numbers
  // Remember: sort() by default sorts as strings, so [10, 2] becomes [10, 2] not [2, 10]
}

// =============================================================================
// ARRAY SEARCH AND TRANSFORM METHODS
// =============================================================================

/**
 * Finds an element in an array using indexOf()
 * @param {any[]} array - Array to search in
 * @param {any} element - Element to find
 * @returns {Object} Object with found element and its index
 *
 * Examples:
 * - findInArray([1, 2, 3], 2) returns { element: 2, index: 1 }
 * - findInArray([1, 2, 3], 4) returns { element: undefined, index: -1 }
 */
function findInArray(array, element) {
  // TODO: Use indexOf() to find the element
  // Return both the element (if found) and its index
}

/**
 * Filters numbers greater than a threshold using filter()
 * @param {number[]} numbers - Array of numbers
 * @param {number} threshold - Minimum value (exclusive)
 * @returns {number[]} New array with numbers greater than threshold
 *
 * Examples:
 * - filterLargeNumbers([1, 5, 3, 8, 2], 4) returns [5, 8]
 */
function filterLargeNumbers(numbers, threshold) {
  // TODO: Use filter() to keep only numbers greater than threshold
}

/**
 * Converts all strings to uppercase using map()
 * @param {string[]} strings - Array of strings
 * @returns {string[]} New array with all strings in uppercase
 *
 * Examples:
 * - mapToUppercase(['hello', 'world']) returns ['HELLO', 'WORLD']
 */
function mapToUppercase(strings) {
  // TODO: Use map() to transform each string to uppercase
}

// =============================================================================
// STRING ↔ ARRAY METHODS
// =============================================================================

/**
 * Splits a string into an array using split()
 * @param {string} str - String to split
 * @param {string} delimiter - Character(s) to split on
 * @returns {string[]} Array of string parts
 *
 * Examples:
 * - splitString('a,b,c', ',') returns ['a', 'b', 'c']
 */
function splitString(str, delimiter) {
  // TODO: Use split() to break string into array
}

/**
 * Joins array elements into a string using join()
 * @param {any[]} array - Array to join
 * @param {string} separator - String to put between elements
 * @returns {string} Joined string
 *
 * Examples:
 * - joinArray(['a', 'b', 'c'], ',') returns 'a,b,c'
 */
function joinArray(array, separator) {
  // TODO: Use join() to combine array elements into string
}

// Export functions for testing
module.exports = {
  addToStart,
  removeFromEnd,
  removeFromStart,
  addToEnd,
  getSlice,
  removeAndInsert,
  combineArrays,
  reverseArray,
  sortNumbers,
  findInArray,
  filterLargeNumbers,
  mapToUppercase,
  splitString,
  joinArray,
};
