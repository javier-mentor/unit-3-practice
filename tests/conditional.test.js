const {
  getAgeCategory,
  getLetterGrade,
} = require("../your-solutions/conditionals");

describe("Conditionals - If/Else Statements", () => {
  describe("getAgeCategory", () => {
    describe("Normal cases", () => {
      test('should return "child" for ages under 13', () => {
        expect(getAgeCategory(5)).toBe("child");
        expect(getAgeCategory(10)).toBe("child");
        expect(getAgeCategory(12)).toBe("child");
      });

      test('should return "teenager" for ages 13-19', () => {
        expect(getAgeCategory(13)).toBe("teenager");
        expect(getAgeCategory(16)).toBe("teenager");
        expect(getAgeCategory(19)).toBe("teenager");
      });

      test('should return "adult" for ages 20-64', () => {
        expect(getAgeCategory(20)).toBe("adult");
        expect(getAgeCategory(30)).toBe("adult");
        expect(getAgeCategory(50)).toBe("adult");
        expect(getAgeCategory(64)).toBe("adult");
      });

      test('should return "senior" for ages 65 and above', () => {
        expect(getAgeCategory(65)).toBe("senior");
        expect(getAgeCategory(70)).toBe("senior");
        expect(getAgeCategory(100)).toBe("senior");
      });
    });

    describe("Edge cases", () => {
      test("should handle boundary values correctly", () => {
        // Test exact boundaries
        expect(getAgeCategory(12)).toBe("child"); // Last child age
        expect(getAgeCategory(13)).toBe("teenager"); // First teenager age
        expect(getAgeCategory(19)).toBe("teenager"); // Last teenager age
        expect(getAgeCategory(20)).toBe("adult"); // First adult age
        expect(getAgeCategory(64)).toBe("adult"); // Last adult age
        expect(getAgeCategory(65)).toBe("senior"); // First senior age
      });

      test("should handle zero and very young ages", () => {
        expect(getAgeCategory(0)).toBe("child");
        expect(getAgeCategory(1)).toBe("child");
      });

      test("should handle very old ages", () => {
        expect(getAgeCategory(150)).toBe("senior");
        expect(getAgeCategory(1000)).toBe("senior");
      });

      test("should handle negative ages appropriately", () => {
        // Note: In real applications, you might want to throw an error
        // For this exercise, treat negative as child or return a special value
        expect(getAgeCategory(-1)).toBe("child");
        expect(getAgeCategory(-10)).toBe("child");
      });

      test("should handle decimal ages", () => {
        expect(getAgeCategory(12.9)).toBe("child");
        expect(getAgeCategory(13.1)).toBe("teenager");
        expect(getAgeCategory(64.9)).toBe("adult");
        expect(getAgeCategory(65.1)).toBe("senior");
      });
    });
  });

  describe("getLetterGrade", () => {
    describe("Normal cases", () => {
      test('should return "A" for scores 90-100', () => {
        expect(getLetterGrade(90)).toBe("A");
        expect(getLetterGrade(95)).toBe("A");
        expect(getLetterGrade(100)).toBe("A");
      });

      test('should return "B" for scores 80-89', () => {
        expect(getLetterGrade(80)).toBe("B");
        expect(getLetterGrade(85)).toBe("B");
        expect(getLetterGrade(89)).toBe("B");
      });

      test('should return "C" for scores 70-79', () => {
        expect(getLetterGrade(70)).toBe("C");
        expect(getLetterGrade(75)).toBe("C");
        expect(getLetterGrade(79)).toBe("C");
      });

      test('should return "D" for scores 60-69', () => {
        expect(getLetterGrade(60)).toBe("D");
        expect(getLetterGrade(65)).toBe("D");
        expect(getLetterGrade(69)).toBe("D");
      });

      test('should return "F" for scores below 60', () => {
        expect(getLetterGrade(59)).toBe("F");
        expect(getLetterGrade(50)).toBe("F");
        expect(getLetterGrade(0)).toBe("F");
      });
    });

    describe("Edge cases", () => {
      test("should handle exact boundary values", () => {
        // Test exact grade boundaries
        expect(getLetterGrade(89)).toBe("B"); // Last B
        expect(getLetterGrade(90)).toBe("A"); // First A
        expect(getLetterGrade(79)).toBe("C"); // Last C
        expect(getLetterGrade(80)).toBe("B"); // First B
        expect(getLetterGrade(69)).toBe("D"); // Last D
        expect(getLetterGrade(70)).toBe("C"); // First C
        expect(getLetterGrade(59)).toBe("F"); // Last F
        expect(getLetterGrade(60)).toBe("D"); // First D
      });

      test("should handle decimal scores", () => {
        expect(getLetterGrade(89.9)).toBe("B");
        expect(getLetterGrade(90.1)).toBe("A");
        expect(getLetterGrade(79.5)).toBe("C");
        expect(getLetterGrade(69.9)).toBe("D");
        expect(getLetterGrade(59.9)).toBe("F");
      });

      test("should handle perfect and zero scores", () => {
        expect(getLetterGrade(100)).toBe("A");
        expect(getLetterGrade(0)).toBe("F");
      });

      test("should handle scores above 100", () => {
        // Extra credit scenarios
        expect(getLetterGrade(105)).toBe("A");
        expect(getLetterGrade(110)).toBe("A");
      });

      test("should handle negative scores", () => {
        expect(getLetterGrade(-1)).toBe("F");
        expect(getLetterGrade(-10)).toBe("F");
        expect(getLetterGrade(-100)).toBe("F");
      });

      test("should handle very large scores", () => {
        expect(getLetterGrade(1000)).toBe("A");
        expect(getLetterGrade(500)).toBe("A");
      });
    });
  });
});
