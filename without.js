const without = function(source, itemsToRemove) {
  let outputArray = source;
  
  outputArray = outputArray.filter(value => !itemsToRemove.includes(value));
  
  //console.log(outputArray)
  
  return outputArray;
  
};
  
const assertArraysEqual = function(arr1, arr2) {

  let output = "";
  
  if (eqArrays(arr1, arr2)) {
    output = `🟢 Assertion Passed: ${arr1} === ${arr2}`;
      
  } else {
    output = `🔴 Assertion Failed: ${arr1} !== ${arr2}`;
      
  }
  //console.log(output)
  return output;
    
};
  
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((index, value) => index === arr2[value])) {
    return true;
      
  }
  return false;
};


// Test Code


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const test = [1, 2, 4, 8, 16];
without(test, [2, 4, 6]);