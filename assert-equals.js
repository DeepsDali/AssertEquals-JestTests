const assertEquals = (expected, actual) => {
  // Check for NaN values
  if (Number.isNaN(expected) && Number.isNaN(actual)) {
    // NaN values are considered equal
    return;
  }

  // Check Primitive types
  if (expected !== actual) {
    throw new Error(`Expected ${expected} but received ${actual}`);
  }
};

module.exports = assertEquals;
