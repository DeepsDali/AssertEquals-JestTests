const assertEquals = (expected, actual) => {
  // Case 1: Both expected and actual values are arrays
  if (Array.isArray(expected) && Array.isArray(actual)) {
    if (expected.length !== actual.length) {
      // Array lengths are different
      throw new Error(
        `Expected ${JSON.stringify(expected)} but received ${JSON.stringify(
          actual
        )}`
      );
    }
    // Compare each element of the arrays
    expected.forEach((expectedElement, index) => {
      if (assertEquals(expectedElement, actual[index])) {
        // Recursively call assertEquals for nested arrays
        throw new Error(
          `Expected ${JSON.stringify(
            expectedElement
          )} but received ${JSON.stringify(actual[index])}`
        );
      }
    });
  }
  // Case 2: Both expected and actual values are NaN
  else if (Number.isNaN(expected) && Number.isNaN(actual)) {
    // NaN values are considered equal
    return;
  }
  // Case 3: Both expected and actual values are RegExp
  else if (expected instanceof RegExp && actual instanceof RegExp) {
    if (expected.source !== actual.source || expected.flags !== actual.flags) {
      // RegExp patterns or flags are different
      throw new Error(`Expected ${expected} but received ${actual}`);
    }
  }
  // Case 4: All other cases (e.g., primitive types)
  else if (expected !== actual) {
    // Values are different
    throw new Error(`Expected ${expected} but received ${actual}`);
  }
};

module.exports = assertEquals;
