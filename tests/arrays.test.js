const {
  findMax,
  getEvenNumbers,
  countLongWords,
} = require("../your-solutions/arrays");

describe("Arrays - Working with Lists of Data", () => {
  describe("findMax", () => {
    describe("Normal cases", () => {
      test("should find maximum in positive number arrays", () => {
        expect(findMax([1, 3, 2])).toBe(3);
        expect(findMax([3, 7, 2, 9, 1])).toBe(9);
        expect(findMax([10, 5, 8])).toBe(10);
        expect(findMax([1, 100, 50, 75])).toBe(100);
      });

      test("should find maximum when max is at different positions", () => {
        expect(findMax([9, 1, 2, 3])).toBe(9); // First
        expect(findMax([1, 9, 2, 3])).toBe(9); // Second
        expect(findMax([1, 2, 3, 9])).toBe(9); // Last
        expect(findMax([1, 2, 9, 3])).toBe(9); // Middle
      });

      test("should handle single element arrays", () => {
        expect(findMax([5])).toBe(5);
        expect(findMax([100])).toBe(100);
        expect(findMax([-5])).toBe(-5);
      });
    });

    describe("Edge cases", () => {
      test("should handle negative numbers", () => {
        expect(findMax([-1, -5, -2])).toBe(-1);
        expect(findMax([-10, -1, -8])).toBe(-1);
        expect(findMax([-100, -50, -75])).toBe(-50);
      });

      test("should handle mixed positive and negative numbers", () => {
        expect(findMax([-1, 5, -2])).toBe(5);
        expect(findMax([10, -5, 8])).toBe(10);
        expect(findMax([-10, -5, 2])).toBe(2);
      });

      test("should handle duplicate maximum values", () => {
        expect(findMax([5, 5, 5])).toBe(5);
        expect(findMax([1, 3, 3, 2])).toBe(3);
        expect(findMax([9, 1, 9, 3])).toBe(9);
      });

      test("should handle zero values", () => {
        expect(findMax([0, 0, 0])).toBe(0);
        expect(findMax([-1, 0, -2])).toBe(0);
        expect(findMax([5, 0, 3])).toBe(5);
      });

      test("should handle decimal numbers", () => {
        expect(findMax([1.5, 2.7, 2.1])).toBe(2.7);
        expect(findMax([3.14, 2.71, 1.41])).toBe(3.14);
        expect(findMax([-1.5, -2.7, -2.1])).toBe(-1.5);
      });

      test("should handle large numbers", () => {
        expect(findMax([1000000, 999999, 1000001])).toBe(1000001);
        expect(findMax([Number.MAX_SAFE_INTEGER, 100, 200])).toBe(
          Number.MAX_SAFE_INTEGER
        );
      });

      test("should throw error or handle empty arrays appropriately", () => {
        // This is a design decision - should return undefined, throw error, or return special value
        expect(() => findMax([])).toThrow();
        // OR if you prefer returning undefined:
        // expect(findMax([])).toBeUndefined();
      });

      test("should handle very large arrays efficiently", () => {
        const largeArray = Array.from(
          { length: 10000 },
          (_, i) => Math.random() * 1000
        );
        const start = Date.now();
        const max = findMax(largeArray);
        const duration = Date.now() - start;

        expect(typeof max).toBe("number");
        expect(duration).toBeLessThan(50); // Should complete quickly
      });
    });
  });

  describe("getEvenNumbers", () => {
    describe("Normal cases", () => {
      test("should filter even numbers correctly", () => {
        expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
        expect(getEvenNumbers([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
        expect(getEvenNumbers([10, 15, 20, 25])).toEqual([10, 20]);
      });

      test("should maintain original order", () => {
        expect(getEvenNumbers([6, 1, 4, 3, 2])).toEqual([6, 4, 2]);
        expect(getEvenNumbers([8, 7, 6, 5, 4])).toEqual([8, 6, 4]);
      });

      test("should handle mixed positive and negative evens", () => {
        expect(getEvenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
        expect(getEvenNumbers([-4, 3, -2, 1, 4])).toEqual([-4, -2, 4]);
      });
    });

    describe("Edge cases", () => {
      test("should return empty array when no even numbers", () => {
        expect(getEvenNumbers([1, 3, 5])).toEqual([]);
        expect(getEvenNumbers([7, 9, 11, 13])).toEqual([]);
        expect(getEvenNumbers([-1, -3, -5])).toEqual([]);
      });

      test("should handle empty input array", () => {
        expect(getEvenNumbers([])).toEqual([]);
      });

      test("should handle zero correctly", () => {
        expect(getEvenNumbers([0])).toEqual([0]);
        expect(getEvenNumbers([0, 1, 2])).toEqual([0, 2]);
        expect(getEvenNumbers([-1, 0, 1])).toEqual([0]);
      });

      test("should handle negative even numbers", () => {
        expect(getEvenNumbers([-4, -3, -2, -1])).toEqual([-4, -2]);
        expect(getEvenNumbers([-6, -5, -4])).toEqual([-6, -4]);
      });

      test("should handle decimal numbers", () => {
        // Note: This depends on how you define "even" for decimals
        // Typically, we'd only consider integers
        expect(getEvenNumbers([2.5, 4, 3.7, 6])).toEqual([4, 6]);
        expect(getEvenNumbers([1.5, 2.0, 3.5, 4.0])).toEqual([2, 4]);
      });

      test("should return new array (not modify original)", () => {
        const original = [1, 2, 3, 4];
        const result = getEvenNumbers(original);

        expect(result).toEqual([2, 4]);
        expect(original).toEqual([1, 2, 3, 4]); // Original unchanged
        expect(result).not.toBe(original); // Different array object
      });

      test("should handle large arrays efficiently", () => {
        const largeArray = Array.from({ length: 10000 }, (_, i) => i);
        const start = Date.now();
        const evens = getEvenNumbers(largeArray);
        const duration = Date.now() - start;

        expect(evens).toHaveLength(5000); // Half should be even
        expect(evens[0]).toBe(0);
        expect(evens[1]).toBe(2);
        expect(duration).toBeLessThan(100);
      });

      test("should handle duplicate even numbers", () => {
        expect(getEvenNumbers([2, 2, 4, 4])).toEqual([2, 2, 4, 4]);
        expect(getEvenNumbers([6, 1, 6, 3, 6])).toEqual([6, 6, 6]);
      });
    });
  });

  describe("countLongWords", () => {
    describe("Normal cases", () => {
      test("should count words meeting length requirement", () => {
        expect(countLongWords(["cat", "dog", "elephant", "bird"], 4)).toBe(2); // "elephant", "bird"
        expect(countLongWords(["hello", "world", "coding"], 5)).toBe(3); // all qualify
        expect(countLongWords(["a", "bb", "ccc"], 2)).toBe(2); // "bb", "ccc"
      });

      test("should handle exact length matches", () => {
        expect(countLongWords(["test", "word", "hi"], 4)).toBe(2); // "test", "word"
        expect(countLongWords(["abc", "defg", "h"], 3)).toBe(2); // "abc", "defg"
      });

      test("should be case sensitive for length", () => {
        expect(countLongWords(["Hello", "WORLD", "test"], 4)).toBe(3);
        expect(countLongWords(["Hi", "BYE", "OK"], 2)).toBe(2); // "Hi", "BYE"
      });
    });

    describe("Edge cases", () => {
      test("should return 0 when no words meet requirement", () => {
        expect(countLongWords(["a", "b", "c"], 2)).toBe(0);
        expect(countLongWords(["hi", "ok"], 5)).toBe(0);
      });

      test("should handle empty words array", () => {
        expect(countLongWords([], 3)).toBe(0);
        expect(countLongWords([], 0)).toBe(0);
      });

      test("should handle empty strings in array", () => {
        expect(countLongWords(["", "hello", ""], 1)).toBe(1); // only "hello"
        expect(countLongWords(["", "", ""], 0)).toBe(3); // all meet length 0
        expect(countLongWords(["", "", ""], 1)).toBe(0); // none meet length 1
      });

      test("should handle zero minimum length", () => {
        expect(countLongWords(["a", "bb", "ccc"], 0)).toBe(3); // all qualify
        expect(countLongWords(["", "hi"], 0)).toBe(2); // both qualify
      });

      test("should handle negative minimum length", () => {
        // All words should qualify with negative minLength
        expect(countLongWords(["a", "bb"], -1)).toBe(2);
        expect(countLongWords([""], -5)).toBe(1);
      });

      test("should handle very large minimum length", () => {
        expect(countLongWords(["short", "medium"], 100)).toBe(0);
        expect(countLongWords(["verylongword"], 50)).toBe(0);
      });

      test("should handle special characters and spaces", () => {
        expect(countLongWords(["hello!", "a-b-c", "test 123"], 5)).toBe(2); // "hello!", "test 123"
        expect(countLongWords(["@#$", "123", "abc!@#"], 3)).toBe(3); // all qualify
      });

      test("should handle unicode characters", () => {
        expect(countLongWords(["café", "naïve", "hi"], 4)).toBe(2); // "café", "naïve"
        expect(countLongWords(["🙂", "hello", "👍👍"], 2)).toBe(2); // "hello", "👍👍"
      });

      test("should handle duplicate words", () => {
        expect(countLongWords(["test", "test", "hi"], 4)).toBe(2); // both "test"s
        expect(countLongWords(["a", "a", "a"], 1)).toBe(3); // all qualify
      });

      test("should handle large arrays efficiently", () => {
        const largeArray = Array.from({ length: 10000 }, (_, i) => `word${i}`);
        const start = Date.now();
        const count = countLongWords(largeArray, 5);
        const duration = Date.now() - start;

        expect(typeof count).toBe("number");
        expect(count).toBeGreaterThan(0);
        expect(duration).toBeLessThan(100);
      });
    });
  });
});
