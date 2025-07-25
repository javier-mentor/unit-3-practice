/**
 * 🚀 Conditionals - If/Else Statements
 *
 * Learn how to make decisions in your code using if/else statements.
 * Run `npm test conditionals` to check your progress.
 */

/**
 * Categorizes a person by their age
 * @param {number} age - The person's age
 * @returns {string} Category: "child", "teenager", "adult", or "senior"
 *
 * Rules:
 * - child: age < 13
 * - teenager: age 13-19
 * - adult: age 20-64
 * - senior: age >= 65
 *
 * Examples:
 * - getAgeCategory(10) returns "child"
 * - getAgeCategory(16) returns "teenager"
 * - getAgeCategory(30) returns "adult"
 * - getAgeCategory(70) returns "senior"
 */
function getAgeCategory(age) {
  // TODO: Implement age categorization
  // Handle edge cases: negative ages, non-numbers
}

/**
 * Converts a numeric score to a letter grade
 * @param {number} score - Numeric score (0-100)
 * @returns {string} Letter grade: "A", "B", "C", "D", or "F"
 *
 * Rules:
 * - A: 90-100
 * - B: 80-89
 * - C: 70-79
 * - D: 60-69
 * - F: below 60
 *
 * Examples:
 * - getLetterGrade(95) returns "A"
 * - getLetterGrade(85) returns "B"
 * - getLetterGrade(75) returns "C"
 * - getLetterGrade(65) returns "D"
 * - getLetterGrade(50) returns "F"
 */
function getLetterGrade(score) {
  // TODO: Implement grade conversion
  // Handle edge cases: scores above 100, negative scores, non-numbers
}

// Export functions for testing
module.exports = {
  getAgeCategory,
  getLetterGrade,
};
