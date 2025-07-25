const { sumNumbers, countdown } = require("../your-solutions/loops");

describe("Loops - For and While Loops", () => {
  describe("sumNumbers", () => {
    describe("Normal cases", () => {
      test("should calculate sum of 1 to n correctly", () => {
        expect(sumNumbers(1)).toBe(1); // 1 = 1
        expect(sumNumbers(3)).toBe(6); // 1+2+3 = 6
        expect(sumNumbers(5)).toBe(15); // 1+2+3+4+5 = 15
        expect(sumNumbers(10)).toBe(55); // 1+2+...+10 = 55
        expect(sumNumbers(100)).toBe(5050); // 1+2+...+100 = 5050
      });

      test("should work with small numbers", () => {
        expect(sumNumbers(2)).toBe(3); // 1+2 = 3
        expect(sumNumbers(4)).toBe(10); // 1+2+3+4 = 10
      });
    });

    describe("Edge cases", () => {
      test("should handle zero correctly", () => {
        expect(sumNumbers(0)).toBe(0);
      });

      test("should handle negative numbers", () => {
        // Negative numbers should return 0 (no positive integers to sum)
        expect(sumNumbers(-1)).toBe(0);
        expect(sumNumbers(-5)).toBe(0);
        expect(sumNumbers(-100)).toBe(0);
      });

      test("should handle decimal numbers", () => {
        // Should treat as Math.floor or handle appropriately
        expect(sumNumbers(3.7)).toBe(6); // Should sum 1+2+3
        expect(sumNumbers(5.2)).toBe(15); // Should sum 1+2+3+4+5
      });

      test("should handle large numbers efficiently", () => {
        expect(sumNumbers(1000)).toBe(500500); // Formula: n(n+1)/2
      });

      test("should return number type", () => {
        expect(typeof sumNumbers(5)).toBe("number");
        expect(typeof sumNumbers(0)).toBe("number");
      });
    });
  });

  describe("countdown", () => {
    describe("Normal cases", () => {
      test("should create countdown arrays correctly", () => {
        expect(countdown(1)).toEqual([1]);
        expect(countdown(3)).toEqual([3, 2, 1]);
        expect(countdown(5)).toEqual([5, 4, 3, 2, 1]);
        expect(countdown(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
      });

      test("should maintain correct order (descending)", () => {
        const result = countdown(7);
        expect(result).toEqual([7, 6, 5, 4, 3, 2, 1]);

        // Verify it's actually descending
        for (let i = 0; i < result.length - 1; i++) {
          expect(result[i]).toBeGreaterThan(result[i + 1]);
        }
      });

      test("should include start and end values", () => {
        const result = countdown(4);
        expect(result[0]).toBe(4); // Starts with input
        expect(result[result.length - 1]).toBe(1); // Ends with 1
      });
    });

    describe("Edge cases", () => {
      test("should handle zero correctly", () => {
        expect(countdown(0)).toEqual([]);
      });

      test("should handle negative numbers", () => {
        expect(countdown(-1)).toEqual([]);
        expect(countdown(-5)).toEqual([]);
      });

      test("should handle decimal numbers", () => {
        // Should treat as Math.floor or handle appropriately
        expect(countdown(3.7)).toEqual([3, 2, 1]);
        expect(countdown(5.9)).toEqual([5, 4, 3, 2, 1]);
      });

      test("should return array type", () => {
        expect(Array.isArray(countdown(5))).toBe(true);
        expect(Array.isArray(countdown(0))).toBe(true);
        expect(Array.isArray(countdown(-1))).toBe(true);
      });

      test("should contain only numbers", () => {
        const result = countdown(5);
        result.forEach((item) => {
          expect(typeof item).toBe("number");
        });
      });

      test("should have correct length", () => {
        expect(countdown(1)).toHaveLength(1);
        expect(countdown(5)).toHaveLength(5);
        expect(countdown(10)).toHaveLength(10);
        expect(countdown(0)).toHaveLength(0);
        expect(countdown(-1)).toHaveLength(0);
      });

      test("should handle large numbers without performance issues", () => {
        const start = Date.now();
        const result = countdown(1000);
        const duration = Date.now() - start;

        expect(result).toHaveLength(1000);
        expect(result[0]).toBe(1000);
        expect(result[999]).toBe(1);
        expect(duration).toBeLessThan(100); // Should complete in under 100ms
      });

      test("should create new array each time (not modify existing)", () => {
        const result1 = countdown(3);
        const result2 = countdown(3);

        expect(result1).toEqual(result2);
        expect(result1).not.toBe(result2); // Different array objects

        result1.push(99);
        expect(result2).not.toContain(99); // Modifying one doesn't affect other
      });
    });
  });
});
