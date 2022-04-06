const assertEqual = function(actual, expected) {
  let output = "";
  if (actual === expected) {
    output = `🟢 Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `🔴 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(output);
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

/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
const abd = { a: "1", b: "2", d: "3" };
const abd2 = { a: "1", b: "2", d: "4" };
const dba = { d: "3", b: "2", a: "1" };
console.log(eqObjects(abc, abd));
console.log(eqObjects(abd2, abd));
console.log(eqObjects(dba, abd));
*/

