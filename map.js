const assertArraysEqual = function(arr1, arr2) {

  let output = "";

  if (eqArrays(arr1, arr2)) {
    output = `🟢 Assertion Passed: ${arr1} === ${arr2}`;
    
  } else {
    output = `🔴 Assertion Failed: ${arr1} !== ${arr2}`;
    
  }

  return output;
  
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


const words = ["ground", "control", "to", "major", "tom"];
const numbers = ["123", "345", "678", "90"];
const numbers2 = [1, 2, 3, 4];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(numbers, number => number[0]);
const results3 = map(numbers2, number => number * 3);
console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"])); // true
console.log(assertArraysEqual(results2, ["1", "3", "6", "9"])); // true
console.log(assertArraysEqual(results3, [3, 6, 9, 12])); // true


