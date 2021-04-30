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


const without = function(array1, array2) {
  const results = array1.filter(hotTicket => !array2.includes(hotTicket));
  console.log(results);
};
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


