const eqObjects = function(object1, object2) {
  let obj1keys = Object.keys(object1);
  let obj2keys = Object.keys(object2);

  if (obj1keys.length !== obj2keys.length) {
    return false;
  }
  
  for (let key of obj1keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  let output = "";

  if (eqObjects(actual, expected)) {
    output = `🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
    
  } else {
    output = `🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    
  }

  return output;
  
};

/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false
*/
