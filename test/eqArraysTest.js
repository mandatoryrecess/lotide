const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("eqArrays", () => {
  it("both arrays should be equal and return true", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});
