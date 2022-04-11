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


const flatten = function(array) {
  let flattened = array.reduce((a, b) => {
    return a.concat(b);
  }, []);
  console.log(flattened);
  return flattened;
};

module.exports = flatten;