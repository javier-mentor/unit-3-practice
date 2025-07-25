const { generateReport } = require("../your-solutions/challenge");

describe("Challenge - Combining All Concepts", () => {
  describe("generateReport", () => {
    describe("Normal cases", () => {
      test("should generate correct report for typical student data", () => {
        const students = [
          { name: "Alice", score: 85 },
          { name: "Bob", score: 92 },
          { name: "Carol", score: 60 },
        ];

        const report = generateReport(students);

        expect(report.totalStudents).toBe(3);
        expect(report.averageScore).toBeCloseTo(79, 1); // (85+92+60)/3 = 79
        expect(report.highestScore).toBe(92);
        expect(report.passingStudents).toBe(2); // Alice and Bob (≥70)
      });

      test("should handle single student correctly", () => {
        const students = [{ name: "David", score: 75 }];

        const report = generateReport(students);

        expect(report.totalStudents).toBe(1);
        expect(report.averageScore).toBe(75);
        expect(report.highestScore).toBe(75);
        expect(report.passingStudents).toBe(1);
      });

      test("should handle multiple students with same scores", () => {
        const students = [
          { name: "Eve", score: 80 },
          { name: "Frank", score: 80 },
          { name: "Grace", score: 80 },
        ];

        const report = generateReport(students);

        expect(report.totalStudents).toBe(3);
        expect(report.averageScore).toBe(80);
        expect(report.highestScore).toBe(80);
        expect(report.passingStudents).toBe(3);
      });
    });

    describe("Edge cases", () => {
      test("should handle empty student array", () => {
        const students = [];
        const report = generateReport(students);

        expect(report.totalStudents).toBe(0);
        expect(report.averageScore).toBe(0); // or NaN, depending on design choice
        expect(report.highestScore).toBeUndefined(); // or 0, depending on design
        expect(report.passingStudents).toBe(0);
      });

      test("should handle all failing students", () => {
        const students = [
          { name: "Fail1", score: 30 },
          { name: "Fail2", score: 45 },
          { name: "Fail3", score: 65 },
        ];

        const report = generateReport(students);

        expect(report.totalStudents).toBe(3);
        expect(report.averageScore).toBeCloseTo(46.67, 1);
        expect(report.highestScore).toBe(65);
        expect(report.passingStudents).toBe(0); // All below 70
      });

      test("should handle all perfect scores", () => {
        const students = [
          { name: "Perfect1", score: 100 },
          { name: "Perfect2", score: 100 },
          { name: "Perfect3", score: 100 },
        ];

        const report = generateReport(students);

        expect(report.totalStudents).toBe(3);
        expect(report.averageScore).toBe(100);
        expect(report.highestScore).toBe(100);
        expect(report.passingStudents).toBe(3);
      });

      test("should handle boundary score of exactly 70", () => {
        const students = [
          { name: "Boundary1", score: 69 },
          { name: "Boundary2", score: 70 },
          { name: "Boundary3", score: 71 },
        ];

        const report = generateReport(students);

        expect(report.totalStudents).toBe(3);
        expect(report.averageScore).toBeCloseTo(70, 1);
        expect(report.highestScore).toBe(71);
        expect(report.passingStudents).toBe(2); // 70 and 71 pass, 69 fails
      });

      test("should handle negative scores", () => {
        const students = [
          { name: "Negative", score: -10 },
          { name: "Zero", score: 0 },
          { name: "Positive", score: 85 },
        ];

        const report = generateReport(students);

        expect(report.totalStudents).toBe(3);
        expect(report.averageScore).toBe(25); // (-10+0+85)/3 = 25
        expect(report.highestScore).toBe(85);
        expect(report.passingStudents).toBe(1); // Only positive score passes
      });

      test("should handle scores above 100", () => {
        const students = [
          { name: "ExtraCredit1", score: 105 },
          { name: "ExtraCredit2", score: 110 },
          { name: "Normal", score: 85 },
        ];

        const report = generateReport(students);

        expect(report.totalStudents).toBe(3);
        expect(report.averageScore).toBe(100); // (105+110+85)/3 = 100
        expect(report.highestScore).toBe(110);
        expect(report.passingStudents).toBe(3); // All pass
      });

      test("should handle decimal scores", () => {
        const students = [
          { name: "Decimal1", score: 85.5 },
          { name: "Decimal2", score: 92.3 },
          { name: "Decimal3", score: 69.9 },
        ];

        const report = generateReport(students);

        expect(report.totalStudents).toBe(3);
        expect(report.averageScore).toBeCloseTo(82.57, 1);
        expect(report.highestScore).toBe(92.3);
        expect(report.passingStudents).toBe(2); // 69.9 fails (< 70)
      });

      test("should handle very large datasets efficiently", () => {
        const students = Array.from({ length: 1000 }, (_, i) => ({
          name: `Student${i}`,
          score: Math.floor(Math.random() * 101), // 0-100
        }));

        const start = Date.now();
        const report = generateReport(students);
        const duration = Date.now() - start;

        expect(report.totalStudents).toBe(1000);
        expect(typeof report.averageScore).toBe("number");
        expect(typeof report.highestScore).toBe("number");
        expect(typeof report.passingStudents).toBe("number");
        expect(report.passingStudents).toBeLessThanOrEqual(1000);
        expect(duration).toBeLessThan(100); // Should be fast
      });

      test("should return object with correct structure", () => {
        const students = [{ name: "Test", score: 80 }];
        const report = generateReport(students);

        expect(typeof report).toBe("object");
        expect(report).toHaveProperty("totalStudents");
        expect(report).toHaveProperty("averageScore");
        expect(report).toHaveProperty("highestScore");
        expect(report).toHaveProperty("passingStudents");

        // Should not have extra properties
        const expectedKeys = [
          "totalStudents",
          "averageScore",
          "highestScore",
          "passingStudents",
        ];
        expect(Object.keys(report).sort()).toEqual(expectedKeys.sort());
      });

      test("should handle students with missing or invalid data", () => {
        const students = [
          { name: "Valid", score: 85 },
          { name: "NoScore" }, // Missing score
          { name: "InvalidScore", score: "not a number" },
          { name: "NullScore", score: null },
        ];

        // This test depends on how you want to handle invalid data
        // Option 1: Skip invalid entries
        // Option 2: Treat as 0
        // Option 3: Throw error

        expect(() => {
          const report = generateReport(students);
          expect(typeof report.totalStudents).toBe("number");
        }).not.toThrow();
      });

      test("should calculate averages with proper precision", () => {
        const students = [
          { name: "A", score: 100 },
          { name: "B", score: 50 },
          { name: "C", score: 75 },
        ];

        const report = generateReport(students);

        // Average should be 75, not 74.99999999999999
        expect(report.averageScore).toBeCloseTo(75, 10);
      });

      test("should handle extreme score values", () => {
        const students = [
          { name: "VeryHigh", score: Number.MAX_SAFE_INTEGER },
          { name: "VeryLow", score: Number.MIN_SAFE_INTEGER },
          { name: "Normal", score: 85 },
        ];

        const report = generateReport(students);

        expect(report.totalStudents).toBe(3);
        expect(report.highestScore).toBe(Number.MAX_SAFE_INTEGER);
        expect(typeof report.averageScore).toBe("number");
        expect(report.passingStudents).toBeGreaterThanOrEqual(1); // At least normal passes
      });

      test("should be deterministic (same input = same output)", () => {
        const students = [
          { name: "Alice", score: 85 },
          { name: "Bob", score: 92 },
        ];

        const report1 = generateReport(students);
        const report2 = generateReport(students);

        expect(report1).toEqual(report2);
      });
    });
  });
});
