const assert = require('chai').assert
const tail = require('../tail');

describe('tail', () => {
  it('Returns "Labs" when given ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Labs"])
  })
  it('Returns [3] when given [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [3])
  })
  it('Returns [4] when given [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [4])
  })

})



