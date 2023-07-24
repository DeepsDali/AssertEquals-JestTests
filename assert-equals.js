const assertEquals = (expected, actual) => {
  // Check Primitive types
  if (expected !== actual) {
    throw new Error(`Expected ${expected} but received ${actual}`);
  }
};

module.exports = assertEquals;
