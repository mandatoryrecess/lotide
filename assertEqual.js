const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈 🏆 Assertion Passed:${actual}===${expected}`);
  } else {
    console.log(`💣 💣 Assertion Failed: ${actual}!==+${expected}`);
  }
};

assertEqual(4, 13);
assertEqual(1, 1);