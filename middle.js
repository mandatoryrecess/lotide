// const assertArraysEqual = require('./assertArraysEqual');
// const eqArrays = require('./eqArrays');

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  }
  if (array.length % 2 !== 0) {
    let i = (array.length - 1) / 2;
    middleArray.push(array[i]);
  } else {
    let i = (array.length) / 2;
    middleArray.push(array[i - 1]);
    middleArray.push(array[i]);
  }
  return middleArray;
};


module.exports = middle