
const findKey = function(object, func) {
  for (const key in object) {
    const star = func(object[key]);
    if (star) {
      return key;
    }
  }
  return undefined;
};


module.exports = findKey;