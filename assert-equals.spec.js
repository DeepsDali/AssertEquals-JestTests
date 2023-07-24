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
    //Compare same Regex patterns
    //Compare same Arrays (Lengths and Elements)
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
    //Compare different Regex patterns
    //Compare unequal Arrays (Lengths and Elements)
  });
});
