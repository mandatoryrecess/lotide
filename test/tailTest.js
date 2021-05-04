const assert = require('chai').assert
const tail = require('../tail');

describe('tail', () => {
  it('Returns "Labs" when given ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Labs"])
  })
  it('Returns [3] when given [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [3])
  })

})



