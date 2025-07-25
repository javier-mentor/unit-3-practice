/**
 * Challenge - Combining All Concepts
 *
 * This is the final challenge that combines conditionals, loops, functions, and arrays.
 * Run `npm test challenge` to check your progress.
 */

/**
 * Generates a comprehensive report from student data
 * @param {Object[]} students - Array of student objects {name: string, score: number}
 * @returns {Object} Report with statistics
 *
 * Return format:
 * {
 *   totalStudents: number,
 *   averageScore: number,
 *   highestScore: number,
 *   passingStudents: number  // score >= 70
 * }
 *
 * Examples:
 * generateReport([{name: "Alice", score: 85}, {name: "Bob", score: 92}])
 * returns: {totalStudents: 2, averageScore: 88.5, highestScore: 92, passingStudents: 2}
 *
 * generateReport([{name: "Carol", score: 65}, {name: "David", score: 45}])
 * returns: {totalStudents: 2, averageScore: 55, highestScore: 65, passingStudents: 0}
 */
function generateReport(students) {
  // TODO: Analyze student data and generate comprehensive report
  // Handle edge cases: empty arrays, perfect scores, all failing students
  //
  // You'll need to:
  // 1. Count total students
  // 2. Calculate average score (sum all scores / number of students)
  // 3. Find highest score
  // 4. Count passing students (score >= 70)
  //
  // Use loops, conditionals, and mathematical operations
}

// Export function for testing
module.exports = {
  generateReport,
};
