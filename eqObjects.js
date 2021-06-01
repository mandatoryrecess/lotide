const eqObjects = function (object1, object2) {
  // Create arrays of property names
  const obj1propNames = Object.getOwnPropertyNames(object1);
  const obj2propNames = Object.getOwnPropertyNames(object2);
  // If number of properties is different,
  // objects are not equivalent
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  const keys = Object.keys(object1);
  keys.length;
  for (const propName of keys) {
    if (!(propName in object2)) {
      return false;
    }
    if (Array.isArray(object1[propName])) {
      if (!Array.isArray(object2[propName])) {
        return false;
      }
      if (!eqArrays(object1[propName], object2[propName])) {
        return false;
      }
    } else {
      if (object1[propName] !== object2[propName]) {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

module.exports = eqObjects;
