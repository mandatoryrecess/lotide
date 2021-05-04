const assert = require('chai').assert
const middle = require('../middle');

describe('middle', () => {
  it('Returns [] when given [1]', () => {
    assert.deepEqual(middle([1]), [])
  })
  it('Returns [2] when given [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  })
  it('Returns [2, 3] when given [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  })

})

