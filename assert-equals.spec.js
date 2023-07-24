const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  //TEST BLOCK 1 of 2 (expected and actual same)
  describe("when expected and actual are the same", () => {
    //Compare same Primitive Values (String, Numbers, Boolean, Null, Undefined, Symbols)
    it("should not throw an error for equal primitive values", () => {
      expect(() => assertEquals("Hello", "Hello")).not.toThrow(); //string
      expect(() => assertEquals(45000, 45000)).not.toThrow(); //number
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
    });
    //Compare unequal Types
    //Compare different Regex patterns
    //Compare unequal Arrays (Lengths and Elements)
  });
});
