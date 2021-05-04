const  assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return console.log(`💣 💣 Array Length is not the same: ${arr1}!== ${arr2}`);
   
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i])
    
      return console.log(`💣 💣 Array Order is not the same: ${arr1}!== ${arr2}`);
  
      return console.log(`🌈 🌈  Looks the Same!: ${arr1} === ${arr2}`);
  
};

module.exports = assertArraysEqual;