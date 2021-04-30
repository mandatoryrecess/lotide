
// const  assertArraysEqual = function(arr1, arr2) {
//   if (arr1.length !== arr2.length)
//     return console.log(`💣 💣 Array Length is not the same: ${arr1}!== ${arr2}`);
   
//   for (let i = 0; i < arr1.length; i++)
//     if (arr1[i] !== arr2[i])
    
//       return console.log(`💣 💣 Array Order is not the same: ${arr1}!== ${arr2}`);
  
//   return console.log(`🌈 🏆 Looks the Same!: ${arr1} === ${arr2}`);
  
// };

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);


console.log(results1);


