const {
  getObjectKeys,
  getObjectValues,
  getObjectEntries,
  hasProperty,
  mergeObjects,
  copyObject,
  countProperties,
  filterObject,
} = require("../your-solutions/object-methods");

describe("JavaScript Object Methods Practice", () => {
  describe("Basic Object Inspection Methods", () => {
    describe("getObjectKeys (using Object.keys)", () => {
      test("should return array of object keys", () => {
        expect(getObjectKeys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
        expect(getObjectKeys({ name: "John", age: 30 })).toEqual([
          "name",
          "age",
        ]);
        expect(getObjectKeys({})).toEqual([]);
      });

      test("should handle objects with different value types", () => {
        const obj = {
          string: "hello",
          number: 42,
          boolean: true,
          array: [1, 2, 3],
          object: { nested: true },
          nullValue: null,
          undefinedValue: undefined,
        };
        expect(getObjectKeys(obj)).toEqual([
          "string",
          "number",
          "boolean",
          "array",
          "object",
          "nullValue",
          "undefinedValue",
        ]);
      });

      test("should handle numeric and symbol keys", () => {
        const obj = { 1: "one", 2: "two", string: "value" };
        expect(getObjectKeys(obj)).toEqual(["1", "2", "string"]);
      });

      test("should return keys in consistent order", () => {
        const obj = { z: 1, a: 2, m: 3 };
        const keys = getObjectKeys(obj);
        expect(keys).toHaveLength(3);
        expect(keys).toContain("z");
        expect(keys).toContain("a");
        expect(keys).toContain("m");
      });
    });

    describe("getObjectValues (using Object.values)", () => {
      test("should return array of object values", () => {
        expect(getObjectValues({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
        expect(getObjectValues({ name: "John", age: 30 })).toEqual([
          "John",
          30,
        ]);
        expect(getObjectValues({})).toEqual([]);
      });

      test("should handle different value types", () => {
        const obj = {
          string: "hello",
          number: 42,
          boolean: true,
          array: [1, 2],
          nullValue: null,
        };
        expect(getObjectValues(obj)).toEqual(["hello", 42, true, [1, 2], null]);
      });

      test("should handle objects with duplicate values", () => {
        const obj = { a: 1, b: 1, c: 2 };
        expect(getObjectValues(obj)).toEqual([1, 1, 2]);
      });
    });

    describe("getObjectEntries (using Object.entries)", () => {
      test("should return array of [key, value] pairs", () => {
        expect(getObjectEntries({ a: 1, b: 2 })).toEqual([
          ["a", 1],
          ["b", 2],
        ]);
        expect(getObjectEntries({ name: "John" })).toEqual([["name", "John"]]);
        expect(getObjectEntries({})).toEqual([]);
      });

      test("should handle different value types", () => {
        const obj = { str: "hello", num: 42, bool: true };
        expect(getObjectEntries(obj)).toEqual([
          ["str", "hello"],
          ["num", 42],
          ["bool", true],
        ]);
      });

      test("should handle complex values", () => {
        const obj = {
          array: [1, 2],
          object: { nested: true },
          nullVal: null,
        };
        expect(getObjectEntries(obj)).toEqual([
          ["array", [1, 2]],
          ["object", { nested: true }],
          ["nullVal", null],
        ]);
      });
    });
  });

  describe("Object Property Checking", () => {
    describe("hasProperty (using hasOwnProperty/in)", () => {
      test("should check if object has property", () => {
        const obj = { name: "John", age: 30, active: true };
        expect(hasProperty(obj, "name")).toBe(true);
        expect(hasProperty(obj, "age")).toBe(true);
        expect(hasProperty(obj, "email")).toBe(false);
      });

      test("should handle properties with falsy values", () => {
        const obj = { zero: 0, empty: "", nullValue: null, falseValue: false };
        expect(hasProperty(obj, "zero")).toBe(true);
        expect(hasProperty(obj, "empty")).toBe(true);
        expect(hasProperty(obj, "nullValue")).toBe(true);
        expect(hasProperty(obj, "falseValue")).toBe(true);
        expect(hasProperty(obj, "missing")).toBe(false);
      });

      test("should handle empty object", () => {
        expect(hasProperty({}, "anything")).toBe(false);
      });

      test("should handle numeric property names", () => {
        const obj = { 1: "one", 2: "two" };
        expect(hasProperty(obj, "1")).toBe(true);
        expect(hasProperty(obj, 1)).toBe(true); // Number converted to string
        expect(hasProperty(obj, "2")).toBe(true);
        expect(hasProperty(obj, 2)).toBe(true);
      });

      test("should handle undefined values", () => {
        const obj = { definedProp: "value", undefinedProp: undefined };
        expect(hasProperty(obj, "definedProp")).toBe(true);
        expect(hasProperty(obj, "undefinedProp")).toBe(true);
        expect(hasProperty(obj, "nonExistentProp")).toBe(false);
      });
    });
  });

  describe("Object Manipulation Methods", () => {
    describe("mergeObjects (using Object.assign/spread)", () => {
      test("should merge multiple objects", () => {
        expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
        expect(mergeObjects({ a: 1 }, { b: 2 }, { c: 3 })).toEqual({
          a: 1,
          b: 2,
          c: 3,
        });
        expect(mergeObjects({})).toEqual({});
      });

      test("should handle property conflicts (later wins)", () => {
        expect(mergeObjects({ a: 1 }, { a: 2, b: 3 })).toEqual({ a: 2, b: 3 });
        expect(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({
          a: 1,
          b: 3,
          c: 4,
        });
      });

      test("should handle empty objects", () => {
        expect(mergeObjects({}, { a: 1 }, {})).toEqual({ a: 1 });
        expect(mergeObjects({}, {})).toEqual({});
      });

      test("should not modify original objects", () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const result = mergeObjects(obj1, obj2);

        expect(obj1).toEqual({ a: 1 });
        expect(obj2).toEqual({ b: 2 });
        expect(result).not.toBe(obj1);
        expect(result).not.toBe(obj2);
      });

      test("should handle nested objects (shallow merge)", () => {
        const obj1 = { a: { x: 1 } };
        const obj2 = { a: { y: 2 } };
        const result = mergeObjects(obj1, obj2);
        expect(result).toEqual({ a: { y: 2 } }); // obj2.a completely replaces obj1.a
      });
    });

    describe("copyObject (shallow copy)", () => {
      test("should create shallow copy of object", () => {
        const original = { a: 1, b: 2 };
        const copy = copyObject(original);

        expect(copy).toEqual({ a: 1, b: 2 });
        expect(copy).not.toBe(original);
      });

      test("should handle empty object", () => {
        const copy = copyObject({});
        expect(copy).toEqual({});
      });

      test("should handle nested objects (shallow)", () => {
        const original = { a: 1, nested: { b: 2 } };
        const copy = copyObject(original);

        expect(copy).toEqual({ a: 1, nested: { b: 2 } });
        expect(copy).not.toBe(original);
        expect(copy.nested).toBe(original.nested); // Shallow copy - nested objects are same reference
      });

      test("should handle different value types", () => {
        const original = {
          str: "hello",
          num: 42,
          bool: true,
          arr: [1, 2],
          obj: { x: 1 },
          nullVal: null,
          undefVal: undefined,
        };
        const copy = copyObject(original);

        expect(copy).toEqual(original);
        expect(copy).not.toBe(original);
      });
    });
  });

  describe("Object Analysis Methods", () => {
    describe("countProperties", () => {
      test("should count number of properties", () => {
        expect(countProperties({ a: 1, b: 2, c: 3 })).toBe(3);
        expect(countProperties({ name: "John" })).toBe(1);
        expect(countProperties({})).toBe(0);
      });

      test("should handle properties with falsy values", () => {
        const obj = { zero: 0, empty: "", nullVal: null, falseVal: false };
        expect(countProperties(obj)).toBe(4);
      });

      test("should handle large objects", () => {
        const largeObj = {};
        for (let i = 0; i < 100; i++) {
          largeObj[`prop${i}`] = i;
        }
        expect(countProperties(largeObj)).toBe(100);
      });
    });

    describe("filterObject", () => {
      test("should filter object properties by predicate", () => {
        const obj = { a: 1, b: 5, c: 3, d: 8 };
        const result = filterObject(obj, (val) => val > 3);
        expect(result).toEqual({ b: 5, d: 8 });
      });

      test("should handle string filtering", () => {
        const obj = { name: "John", age: 30, city: "NYC" };
        const result = filterObject(obj, (val) => typeof val === "string");
        expect(result).toEqual({ name: "John", city: "NYC" });
      });

      test("should handle no matches", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = filterObject(obj, (val) => val > 10);
        expect(result).toEqual({});
      });

      test("should handle all matches", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = filterObject(obj, (val) => val > 0);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
      });

      test("should handle empty object", () => {
        const result = filterObject({}, (val) => true);
        expect(result).toEqual({});
      });

      test("should not modify original object", () => {
        const original = { a: 1, b: 5, c: 3 };
        const result = filterObject(original, (val) => val > 3);

        expect(original).toEqual({ a: 1, b: 5, c: 3 });
        expect(result).not.toBe(original);
      });

      test("should handle complex predicates", () => {
        const obj = {
          num1: 10,
          num2: 5,
          str1: "hello",
          str2: "hi",
          bool: true,
        };
        const result = filterObject(
          obj,
          (val) =>
            (typeof val === "number" && val > 7) ||
            (typeof val === "string" && val.length > 3)
        );
        expect(result).toEqual({ num1: 10, str1: "hello" });
      });
    });
  });
});
