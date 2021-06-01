const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("countOnly", () => {
  it("returns { Jason: 1 }", () => {
    
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];

    assert.equal(countOnly(firstNames, { Jason: true }), { Jason: 1 });
  });
});
