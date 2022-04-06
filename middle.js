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

  

const middle = function(array) {
  middleArray = [];
  midval = 0;
  if (array.length === 1 || array.length === 2 ) {
    console.log(middleArray)
    return middleArray;
  } else if (array.length % 2 !== 0) {
    midval = Math.floor(array.length / 2)
    middleArray.push(array[midval]);
    console.log(middleArray)
    return middleArray
  } else {
    midval = Math.floor(array.length / 2)
    middleArray.push(array[midval - 1]);
    middleArray.push(array[midval]);
    console.log(middleArray)
    return middleArray;
  }
  }




assertArraysEqual(middle([1, 2, 3, 4, 5], [3]))
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
middle(['a'])
middle(['b', 'c'])
middle(['a', 'b', 'c'])
middle([1, 2, 3, 4, 5])
middle([6, 7, 8, 9, 10, 11])
middle([1, 2, 3, 4, 5, 6])