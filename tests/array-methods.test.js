const {
  addToStart,
  removeFromEnd,
  removeFromStart,
  addToEnd,
  getSlice,
  removeAndInsert,
  combineArrays,
  splitString,
  joinArray,
  reverseArray,
  sortNumbers,
  findInArray,
  filterLargeNumbers,
  mapToUppercase,
} = require("../your-solutions/array-methods");

describe("JavaScript Array Methods Practice", () => {
  describe("Array Modification Methods", () => {
    describe("addToStart (using unshift)", () => {
      test("should add element to beginning of array", () => {
        expect(addToStart([2, 3, 4], 1)).toEqual([1, 2, 3, 4]);
        expect(addToStart(["b", "c"], "a")).toEqual(["a", "b", "c"]);
        expect(addToStart([], "first")).toEqual(["first"]);
      });

      test("should handle multiple elements", () => {
        expect(addToStart([4, 5], 1, 2, 3)).toEqual([1, 2, 3, 4, 5]);
        expect(addToStart(["d"], "a", "b", "c")).toEqual(["a", "b", "c", "d"]);
      });

      test("should not modify original array", () => {
        const original = [2, 3, 4];
        const result = addToStart(original, 1);
        expect(original).toEqual([2, 3, 4]);
        expect(result).not.toBe(original);
      });

      test("should handle edge cases", () => {
        expect(addToStart([], undefined)).toEqual([undefined]);
        expect(addToStart([null], null)).toEqual([null, null]);
        expect(addToStart([1, 2], 0)).toEqual([0, 1, 2]);
      });
    });

    describe("removeFromEnd (using pop)", () => {
      test("should remove and return last element", () => {
        expect(removeFromEnd([1, 2, 3, 4])).toEqual({
          removed: 4,
          array: [1, 2, 3],
        });
        expect(removeFromEnd(["a", "b", "c"])).toEqual({
          removed: "c",
          array: ["a", "b"],
        });
        expect(removeFromEnd([42])).toEqual({ removed: 42, array: [] });
      });

      test("should handle empty array", () => {
        expect(removeFromEnd([])).toEqual({ removed: undefined, array: [] });
      });

      test("should not modify original array", () => {
        const original = [1, 2, 3];
        const result = removeFromEnd(original);
        expect(original).toEqual([1, 2, 3]);
        expect(result.array).not.toBe(original);
      });

      test("should handle different data types", () => {
        expect(removeFromEnd([1, "two", { three: 3 }])).toEqual({
          removed: { three: 3 },
          array: [1, "two"],
        });
      });
    });

    describe("removeFromStart (using shift)", () => {
      test("should remove and return first element", () => {
        expect(removeFromStart([1, 2, 3, 4])).toEqual({
          removed: 1,
          array: [2, 3, 4],
        });
        expect(removeFromStart(["a", "b", "c"])).toEqual({
          removed: "a",
          array: ["b", "c"],
        });
        expect(removeFromStart([42])).toEqual({ removed: 42, array: [] });
      });

      test("should handle empty array", () => {
        expect(removeFromStart([])).toEqual({ removed: undefined, array: [] });
      });

      test("should not modify original array", () => {
        const original = [1, 2, 3];
        const result = removeFromStart(original);
        expect(original).toEqual([1, 2, 3]);
        expect(result.array).not.toBe(original);
      });

      test("should handle different data types", () => {
        expect(removeFromStart([{ one: 1 }, "two", 3])).toEqual({
          removed: { one: 1 },
          array: ["two", 3],
        });
      });
    });

    describe("addToEnd (using push)", () => {
      test("should add element to end of array", () => {
        expect(addToEnd([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
        expect(addToEnd(["a", "b"], "c")).toEqual(["a", "b", "c"]);
        expect(addToEnd([], "first")).toEqual(["first"]);
      });

      test("should handle multiple elements", () => {
        expect(addToEnd([1, 2], 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(addToEnd(["a"], "b", "c", "d")).toEqual(["a", "b", "c", "d"]);
      });

      test("should not modify original array", () => {
        const original = [1, 2, 3];
        const result = addToEnd(original, 4);
        expect(original).toEqual([1, 2, 3]);
        expect(result).not.toBe(original);
      });

      test("should handle edge cases", () => {
        expect(addToEnd([1, 2], undefined)).toEqual([1, 2, undefined]);
        expect(addToEnd([null], null)).toEqual([null, null]);
        expect(addToEnd([1, 2], 0)).toEqual([1, 2, 0]);
      });
    });
  });

  describe("Array Access Methods", () => {
    describe("getSlice (using slice)", () => {
      test("should extract portion of array", () => {
        expect(getSlice([1, 2, 3, 4, 5], 1, 4)).toEqual([2, 3, 4]);
        expect(getSlice(["a", "b", "c", "d"], 0, 2)).toEqual(["a", "b"]);
        expect(getSlice([1, 2, 3], 1)).toEqual([2, 3]); // No end parameter
      });

      test("should handle negative indices", () => {
        expect(getSlice([1, 2, 3, 4, 5], -3, -1)).toEqual([3, 4]);
        expect(getSlice(["a", "b", "c"], -2)).toEqual(["b", "c"]);
      });

      test("should handle edge cases", () => {
        expect(getSlice([], 0, 1)).toEqual([]);
        expect(getSlice([1, 2, 3], 5, 10)).toEqual([]);
        expect(getSlice([1, 2, 3], 0, 0)).toEqual([]);
        expect(getSlice([1, 2, 3], 2, 1)).toEqual([]); // Start > end
      });

      test("should not modify original array", () => {
        const original = [1, 2, 3, 4];
        const result = getSlice(original, 1, 3);
        expect(original).toEqual([1, 2, 3, 4]);
        expect(result).not.toBe(original);
      });
    });

    describe("removeAndInsert (using splice)", () => {
      test("should remove and insert elements", () => {
        expect(removeAndInsert([1, 2, 3, 4, 5], 2, 1, "new")).toEqual({
          removed: [3],
          array: [1, 2, "new", 4, 5],
        });

        expect(removeAndInsert(["a", "b", "c"], 1, 2, "x", "y")).toEqual({
          removed: ["b", "c"],
          array: ["a", "x", "y"],
        });
      });

      test("should insert without removing", () => {
        expect(removeAndInsert([1, 2, 3], 1, 0, "inserted")).toEqual({
          removed: [],
          array: [1, "inserted", 2, 3],
        });
      });

      test("should remove without inserting", () => {
        expect(removeAndInsert([1, 2, 3, 4], 1, 2)).toEqual({
          removed: [2, 3],
          array: [1, 4],
        });
      });

      test("should handle edge cases", () => {
        expect(removeAndInsert([], 0, 0, "item")).toEqual({
          removed: [],
          array: ["item"],
        });

        expect(removeAndInsert([1, 2, 3], 10, 1, "item")).toEqual({
          removed: [],
          array: [1, 2, 3, "item"],
        });
      });
    });
  });

  describe("Array Utility Methods", () => {
    describe("combineArrays (using concat)", () => {
      test("should combine multiple arrays", () => {
        expect(combineArrays([1, 2], [3, 4], [5, 6])).toEqual([
          1, 2, 3, 4, 5, 6,
        ]);
        expect(combineArrays(["a"], ["b", "c"], ["d"])).toEqual([
          "a",
          "b",
          "c",
          "d",
        ]);
        expect(combineArrays([1, 2])).toEqual([1, 2]); // Single array
      });

      test("should handle empty arrays", () => {
        expect(combineArrays([], [1, 2], [])).toEqual([1, 2]);
        expect(combineArrays([], [])).toEqual([]);
      });

      test("should handle mixed data types", () => {
        expect(
          combineArrays([1, "two"], [{ three: 3 }], [null, undefined])
        ).toEqual([1, "two", { three: 3 }, null, undefined]);
      });

      test("should not modify original arrays", () => {
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const result = combineArrays(arr1, arr2);

        expect(arr1).toEqual([1, 2]);
        expect(arr2).toEqual([3, 4]);
        expect(result).not.toBe(arr1);
        expect(result).not.toBe(arr2);
      });
    });

    describe("reverseArray (using reverse)", () => {
      test("should reverse array order", () => {
        expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
        expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
        expect(reverseArray([42])).toEqual([42]);
      });

      test("should handle empty array", () => {
        expect(reverseArray([])).toEqual([]);
      });

      test("should not modify original array", () => {
        const original = [1, 2, 3];
        const result = reverseArray(original);
        expect(original).toEqual([1, 2, 3]);
        expect(result).not.toBe(original);
      });

      test("should handle mixed data types", () => {
        expect(reverseArray([1, "two", { three: 3 }, null])).toEqual([
          null,
          { three: 3 },
          "two",
          1,
        ]);
      });
    });

    describe("sortNumbers (using sort)", () => {
      test("should sort numbers in ascending order", () => {
        expect(sortNumbers([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
        expect(sortNumbers([10, 2, 33, 4])).toEqual([2, 4, 10, 33]);
        expect(sortNumbers([5])).toEqual([5]);
      });

      test("should handle negative numbers", () => {
        expect(sortNumbers([-3, 1, -1, 2])).toEqual([-3, -1, 1, 2]);
        expect(sortNumbers([-10, -1, -8])).toEqual([-10, -8, -1]);
      });

      test("should handle decimal numbers", () => {
        expect(sortNumbers([3.14, 2.71, 1.41])).toEqual([1.41, 2.71, 3.14]);
      });

      test("should handle empty array", () => {
        expect(sortNumbers([])).toEqual([]);
      });

      test("should not modify original array", () => {
        const original = [3, 1, 2];
        const result = sortNumbers(original);
        expect(original).toEqual([3, 1, 2]);
        expect(result).not.toBe(original);
      });
    });
  });

  describe("Array Search Methods", () => {
    describe("findInArray (using find/indexOf)", () => {
      test("should find first matching element", () => {
        expect(findInArray([1, 2, 3, 2, 4], 2)).toEqual({
          element: 2,
          index: 1,
        });
        expect(findInArray(["a", "b", "c"], "b")).toEqual({
          element: "b",
          index: 1,
        });
        expect(findInArray([1, 2, 3], 4)).toEqual({
          element: undefined,
          index: -1,
        });
      });

      test("should handle complex objects", () => {
        const obj1 = { id: 1, name: "Alice" };
        const obj2 = { id: 2, name: "Bob" };
        const result = findInArray([obj1, obj2], obj2);
        expect(result).toEqual({ element: obj2, index: 1 });
      });

      test("should handle edge cases", () => {
        expect(findInArray([], 1)).toEqual({ element: undefined, index: -1 });
        expect(findInArray([null, undefined], null)).toEqual({
          element: null,
          index: 0,
        });
        expect(findInArray([0, false, ""], 0)).toEqual({
          element: 0,
          index: 0,
        });
      });
    });

    describe("filterLargeNumbers (using filter)", () => {
      test("should filter numbers greater than threshold", () => {
        expect(filterLargeNumbers([1, 5, 3, 8, 2, 10], 5)).toEqual([8, 10]);
        expect(filterLargeNumbers([1, 2, 3], 5)).toEqual([]);
        expect(filterLargeNumbers([10, 20, 30], 5)).toEqual([10, 20, 30]);
      });

      test("should handle negative numbers", () => {
        expect(filterLargeNumbers([-5, -2, 0, 3, -1], 0)).toEqual([3]);
        expect(filterLargeNumbers([-10, -5, -1], -3)).toEqual([-1]);
      });

      test("should handle decimal numbers", () => {
        expect(filterLargeNumbers([1.5, 2.7, 3.1, 4.9], 3)).toEqual([3.1, 4.9]);
      });

      test("should handle empty array", () => {
        expect(filterLargeNumbers([], 5)).toEqual([]);
      });

      test("should not modify original array", () => {
        const original = [1, 5, 3, 8];
        const result = filterLargeNumbers(original, 4);
        expect(original).toEqual([1, 5, 3, 8]);
        expect(result).not.toBe(original);
      });
    });
  });

  describe("String and Array Transformation", () => {
    describe("splitString (using split)", () => {
      test("should split string by delimiter", () => {
        expect(splitString("a,b,c,d", ",")).toEqual(["a", "b", "c", "d"]);
        expect(splitString("hello world test", " ")).toEqual([
          "hello",
          "world",
          "test",
        ]);
        expect(splitString("one-two-three", "-")).toEqual([
          "one",
          "two",
          "three",
        ]);
      });

      test("should handle edge cases", () => {
        expect(splitString("", ",")).toEqual([""]);
        expect(splitString("nodelimiter", ",")).toEqual(["nodelimiter"]);
        expect(splitString("a,,b", ",")).toEqual(["a", "", "b"]);
      });

      test("should handle different delimiters", () => {
        expect(splitString("a|b|c", "|")).toEqual(["a", "b", "c"]);
        expect(splitString("word1\nword2\nword3", "\n")).toEqual([
          "word1",
          "word2",
          "word3",
        ]);
      });
    });

    describe("joinArray (using join)", () => {
      test("should join array elements with separator", () => {
        expect(joinArray(["a", "b", "c"], ",")).toBe("a,b,c");
        expect(joinArray(["hello", "world"], " ")).toBe("hello world");
        expect(joinArray([1, 2, 3], "-")).toBe("1-2-3");
      });

      test("should handle edge cases", () => {
        expect(joinArray([], ",")).toBe("");
        expect(joinArray(["single"], ",")).toBe("single");
        expect(joinArray(["", "b", ""], ",")).toBe(",b,");
      });

      test("should handle different data types", () => {
        expect(joinArray([1, "two", true, null], "|")).toBe("1|two|true|null");
        expect(joinArray([undefined, 0, false], ",")).toBe(",0,false");
      });
    });

    describe("mapToUppercase (using map)", () => {
      test("should convert all strings to uppercase", () => {
        expect(mapToUppercase(["hello", "world"])).toEqual(["HELLO", "WORLD"]);
        expect(mapToUppercase(["a", "B", "c"])).toEqual(["A", "B", "C"]);
        expect(mapToUppercase(["MiXeD", "CaSe"])).toEqual(["MIXED", "CASE"]);
      });

      test("should handle empty array", () => {
        expect(mapToUppercase([])).toEqual([]);
      });

      test("should handle single character strings", () => {
        expect(mapToUppercase(["a", "b", "c"])).toEqual(["A", "B", "C"]);
      });

      test("should handle special characters", () => {
        expect(mapToUppercase(["hello!", "@world", "123abc"])).toEqual([
          "HELLO!",
          "@WORLD",
          "123ABC",
        ]);
      });

      test("should not modify original array", () => {
        const original = ["hello", "world"];
        const result = mapToUppercase(original);
        expect(original).toEqual(["hello", "world"]);
        expect(result).not.toBe(original);
      });
    });
  });
});
