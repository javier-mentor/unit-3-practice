/**
 * JavaScript Object Methods - Practice with Built-in Object Functions
 *
 * Learn how to work with JavaScript objects and their properties.
 * Run `npm test object-methods` to check your progress.
 */

/**
 * Gets all property names from an object using Object.keys()
 * @param {Object} obj - Object to get keys from
 * @returns {string[]} Array of property names
 *
 * Examples:
 * - getObjectKeys({a: 1, b: 2}) returns ['a', 'b']
 * - getObjectKeys({name: 'John', age: 30}) returns ['name', 'age']
 * - getObjectKeys({}) returns []
 */
function getObjectKeys(obj) {
  // TODO: Use Object.keys() to get array of property names
}

/**
 * Gets all property values from an object using Object.values()
 * @param {Object} obj - Object to get values from
 * @returns {any[]} Array of property values
 *
 * Examples:
 * - getObjectValues({a: 1, b: 2}) returns [1, 2]
 * - getObjectValues({name: 'John', age: 30}) returns ['John', 30]
 * - getObjectValues({}) returns []
 */
function getObjectValues(obj) {
  // TODO: Use Object.values() to get array of property values
}

/**
 * Gets all key-value pairs from an object using Object.entries()
 * @param {Object} obj - Object to get entries from
 * @returns {Array[]} Array of [key, value] pairs
 *
 * Examples:
 * - getObjectEntries({a: 1, b: 2}) returns [['a', 1], ['b', 2]]
 * - getObjectEntries({name: 'John'}) returns [['name', 'John']]
 * - getObjectEntries({}) returns []
 */
function getObjectEntries(obj) {
  // TODO: Use Object.entries() to get array of [key, value] pairs
}

/**
 * Checks if an object has a specific property using hasOwnProperty()
 * @param {Object} obj - Object to check
 * @param {string} prop - Property name to look for
 * @returns {boolean} True if property exists
 *
 * Examples:
 * - hasProperty({name: 'John'}, 'name') returns true
 * - hasProperty({name: 'John'}, 'age') returns false
 * - hasProperty({}, 'anything') returns false
 */
function hasProperty(obj, prop) {
  // TODO: Use hasOwnProperty() or the 'in' operator to check for property
}

/**
 * Merges multiple objects into one using Object.assign()
 * @param {...Object} objects - Objects to merge
 * @returns {Object} New object with all properties combined
 *
 * Examples:
 * - mergeObjects({a: 1}, {b: 2}) returns {a: 1, b: 2}
 * - mergeObjects({a: 1}, {a: 2, b: 3}) returns {a: 2, b: 3} (later values override)
 * - mergeObjects({}) returns {}
 */
function mergeObjects(...objects) {
  // TODO: Use Object.assign() or spread operator to combine objects
  // Later properties should override earlier ones
}

/**
 * Creates a shallow copy of an object
 * @param {Object} obj - Object to copy
 * @returns {Object} New object with same properties
 *
 * Examples:
 * - copyObject({a: 1, b: 2}) returns {a: 1, b: 2}
 * - copyObject({}) returns {}
 *
 * Note: The copy should be a different object (not the same reference)
 */
function copyObject(obj) {
  // TODO: Create a shallow copy using Object.assign() or spread operator
  // The returned object should not be the same reference as the input
}

/**
 * Counts the number of properties in an object
 * @param {Object} obj - Object to count properties of
 * @returns {number} Number of own properties
 *
 * Examples:
 * - countProperties({a: 1, b: 2, c: 3}) returns 3
 * - countProperties({name: 'John'}) returns 1
 * - countProperties({}) returns 0
 */
function countProperties(obj) {
  // TODO: Count the number of own properties
  // Hint: You can use Object.keys() and check its length
}

/**
 * Filters an object to only include properties that pass a test
 * @param {Object} obj - Object to filter
 * @param {Function} predicate - Function that tests each value (should return boolean)
 * @returns {Object} New object with only properties that pass the test
 *
 * Examples:
 * - filterObject({a: 1, b: 5, c: 3}, val => val > 2) returns {b: 5, c: 3}
 * - filterObject({name: 'John', age: 30}, val => typeof val === 'string') returns {name: 'John'}
 */
function filterObject(obj, predicate) {
  // TODO: Create a new object with only properties where predicate(value) returns true
  // You'll need to use Object.keys() or Object.entries() and build a new object
}

// Export functions for testing
module.exports = {
  getObjectKeys,
  getObjectValues,
  getObjectEntries,
  hasProperty,
  mergeObjects,
  copyObject,
  countProperties,
  filterObject,
};
