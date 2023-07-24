const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  //TEST BLOCK 1 of 2 (expected and actual same)
  describe("when expected and actual are the same", () => {
    //Compare same Primitive Values (String, Numbers, Boolean, Null, Undefined, Symbols)
    it("should not throw an error for equal primitive values", () => {
      expect(() => assertEquals("Hello", "Hello")).not.toThrow(); //string
      expect(() => assertEquals(45000, 45000)).not.toThrow(); //number
      expect(() => assertEquals(-45000, -45000)).not.toThrow(); //negative number
      expect(() => assertEquals(3.14, 3.14)).not.toThrow(); //float (Pi)
      expect(() => assertEquals(true, true)).not.toThrow(); //Boolean
      expect(() => assertEquals(null, null)).not.toThrow(); // Null
      expect(() => assertEquals(undefined, undefined)).not.toThrow(); //undefined
      expect(() => assertEquals(NaN, NaN)).not.toThrow(); //NaN
      expect(() => assertEquals(0, 0)).not.toThrow(); //0
      expect(() => assertEquals("", "")).not.toThrow(); // Empty string
      expect(() =>
        assertEquals(9007199254740991, 9007199254740991)
      ).not.toThrow(); //BigInt
      expect(() =>
        assertEquals(
          "!@#$%^&*()_+-=[]{}|;:,.<>?/",
          "!@#$%^&*()_+-=[]{}|;:,.<>?/"
        )
      ).not.toThrow(); // Special characters
    });

    //Compare same Types

    it("should not throw an error for same type of values", () => {
      expect(() => assertEquals(true, true)).not.toThrow();
      expect(() => assertEquals(null, null)).not.toThrow();
      expect(() => assertEquals(typeof "hello", typeof "world")).not.toThrow();
      expect(() => assertEquals(typeof 1, typeof 1)).not.toThrow();
    });

    //Compare same Regex patterns

    it("should not throw an error for same regex pattern", () => {
      const regex1 = /[^a-zA-Z0-9]/g;
      const regex2 = /[^a-zA-Z0-9]/g;
      expect(() => assertEquals(regex1, regex2)).not.toThrow(); // regex should match as same pattern
    });

    //Compare same Arrays (Lengths and Elements)

    it("should not throw an error for equal arrays", () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3];
      expect(() => assertEquals(arr1, arr2)).not.toThrow();

      const nestedArr1 = [1, [2, 3], [4, [5]]];
      const nestedArr2 = [1, [2, 3], [4, [5]]];
      expect(() => assertEquals(nestedArr1, nestedArr2)).not.toThrow();

      const emptyArr1 = [];
      const emptyArr2 = [];
      expect(() => assertEquals(emptyArr1, emptyArr2)).not.toThrow();
    });
    it("should not throw an error when applying array methods", () => {
      const arr1 = [1, 2, 3, 4, 5];
      const arr2 = [7, 6];
      const arr3 = [[1], [2], [3, [4, [[5]]]]];
      const slicedArr = arr1.slice(1, 4);
      const mappedArr = arr1.map((num) => num * 2);
      const filteredArr = arr1.filter((num) => num % 2 === 0);
      const sum = arr1.reduce((acc, num) => acc + num, 0);
      const hasEven = arr1.some((num) => num % 2 === 0);
      const found = arr1.find((num) => num > 2);
      const includesThree = arr1.includes(3);
      const sortedArr = arr2.sort();
      const reversedArr = arr1.reverse();
      const flattened = arr3.flat(Infinity);

      expect(() => assertEquals(slicedArr, [2, 3, 4])).not.toThrow(); // slice
      expect(() => assertEquals(mappedArr, [2, 4, 6, 8, 10])).not.toThrow(); // map
      expect(() => assertEquals(filteredArr, [2, 4])).not.toThrow(); // filter
      expect(() => assertEquals(sum, 15)).not.toThrow(); // reduce
      expect(() => assertEquals(hasEven, true)).not.toThrow(); // some
      expect(() => assertEquals(found, 3)).not.toThrow(); // find
      expect(() => assertEquals(includesThree, true)).not.toThrow(); // includes
      expect(() => assertEquals(sortedArr, [6, 7])).not.toThrow(); // sort
      expect(() => assertEquals(reversedArr, [5, 4, 3, 2, 1])).not.toThrow(); // reverse
      expect(() => assertEquals(flattened, [1, 2, 3, 4, 5])).not.toThrow(); // flat
    });
  });

  //TEST BLOCK 2 of 2 (expected and actual different)
  describe("when expected and actual are different", () => {
    //Compare unequal Primitive Values (String, Numbers, Boolean, Null, Undefined, Symbols)
    it("should throw an error for unequal primitive values", () => {
      expect(() => assertEquals("Hello", "World")).toThrow(); //string
      expect(() => assertEquals(45000, 4500)).toThrow(); //number
      expect(() => assertEquals(-45000, -450000)).toThrow(); //negative number
      expect(() => assertEquals(3.141, 3.14)).toThrow(); //float (Pi)
      expect(() => assertEquals(true, false)).toThrow(); //Boolean
      expect(() => assertEquals(null, undefined)).toThrow(); // Null and undefined
      expect(() => assertEquals(NaN, 0)).toThrow(); //NaN 0
      expect(() => assertEquals(1, "1")).toThrow(); //string and number
      expect(() => assertEquals("", " ")).toThrow(); // Different empty string
      expect(() => assertEquals(9007199254740990, 9007199254740991)).toThrow(); //BigInt
      expect(() =>
        assertEquals(
          "!@#$%^&*()_+-=[]{}|;:,.<>?/",
          "@#$%^&*()_+-=[]{}|;:,.<>?!/"
        )
      ).toThrow(); // Special characters
    });

    //Compare unequal Types

    it("should throw an error for different type of values", () => {
      expect(() => assertEquals(true, false)).toThrow();
      expect(() => assertEquals(null, undefined)).toThrow();
      expect(() => assertEquals(typeof null, typeof 0)).toThrow();
      expect(() => assertEquals(typeof "44", typeof 44)).toThrow();
    });

    //Compare different Regex patterns

    it("should throw an error for different regex patterns", () => {
      const regex1 = /[^a-zA-Z0-9]/g;
      const regex2 = /[a-z]+/;
      expect(() => assertEquals(regex1, regex2)).toThrow(); // regex should not match as different pattern
    });

    //Compare unequal Arrays (Lengths and Elements)

    it("should throw an error for unequal arrays", () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 4]; // Different last element
      expect(() => assertEquals(arr1, arr2)).toThrow();

      const arr3 = [1, 2, 3];
      const arr4 = ["one", "two", "three"]; // Different type
      expect(() => assertEquals(arr3, arr4)).toThrow();

      const nestedArr1 = [1, [2, 3], [4, [5]]];
      const nestedArr2 = [1, [2, 3], [4, [6]]]; // Different nested element
      expect(() => assertEquals(nestedArr1, nestedArr2)).toThrow();

      const arr5 = [1, 2, 3, 4];
      const arr6 = [1, 2, 3]; // Different length
      expect(() => assertEquals(arr5, arr6)).toThrow();
    });
  });
});
