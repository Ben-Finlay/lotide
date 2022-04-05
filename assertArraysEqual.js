const assertArraysEqual = function(arr1, arr2) {

  let output = "";

  if (arr1.length === arr2.length && arr1.every((index, value) => index === arr2[value])) {
    output = `🟢 Assertion Passed: ${arr1} === ${arr2}`
    
  } else {
    output = `🔴 Assertion Failed: ${arr1} !== ${arr2}`;
    
  }
  console.log(output)
  return output;
  
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);