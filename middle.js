//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈 🏆 Assertion Passed:${actual}===${expected}`);
  } else {
    console.log(`💣 💣 Assertion Failed: ${actual}!==+${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
///assertArraysEqual
const  assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return console.log(`💣 💣 Array Length is not the same: ${arr1}!== ${arr2}`);
   
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i])
    
      return console.log(`💣 💣 Array Order is not the same: ${arr1}!== ${arr2}`);
  
  return console.log(`🌈 🏆 Looks the Same!: ${arr1} === ${arr2}`);
};

// ACTUAL FUNCTION

const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
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

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]