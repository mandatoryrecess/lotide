const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈 🏆 Assertion Passed:${actual}===${expected}`);
  } else {
    console.log(`💣 💣 Assertion Failed: ${actual}!==+${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];

const tail = function(words) {
  let tailArray = [];
  tailArray = words.slice(1);
  return tailArray;
};
tail(words);
assertEqual(words.length, 3);