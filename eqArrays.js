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
  if (arr1.length === arr2.length && arr1.every((index, value) => index === arr2[value])) {
    return true;
    
  }
  return false;
};
  


// Test Code


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), true);