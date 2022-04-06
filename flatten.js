const assertArraysEqual = function(arr1, arr2) {

  let output = "";

  if (eqArrays(arr1, arr2)) {
    output = `🟢 Assertion Passed: ${arr1} === ${arr2}`;
    
  } else {
    output = `🔴 Assertion Failed: ${arr1} !== ${arr2}`;
    
  }
  console.log(output);
  return output;
  
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((index, value) => index === arr2[value])) {
    return true;
    
  }
  return false;
};

const flatten = function(array) {
  let flattened = array.reduce((a, b) => {
    return a.concat(b);
  }, []);
  console.log(flattened);
  return flattened;
};

flatten([1, 2, [3, 4], 5, [6]]);