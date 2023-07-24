const assertEquals = (expected, actual) => {
  //Check if both expected and actual values are arrays
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
  } else if (Number.isNaN(expected) && Number.isNaN(actual)) {
    // NaN values are considered equal
    return;
  } else if (expected !== actual) {
    // Values are different
    throw new Error(`Expected ${expected} but received ${actual}`);
  }
};

module.exports = assertEquals;
