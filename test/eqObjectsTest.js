const assert = require('chai').assert
const eqObjects = require('../eqObjects');



describe('eqObjects', () => {
  it('Should assert if both objects are equal', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };

    assert.deepEqual(eqObjects(ab, ba), true )})
  
})