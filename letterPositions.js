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
  



const letterPositions = function(sentence) {
  const results = {};


  for (i in sentence) {
    const letter = sentence[i];
    if (results[letter]) {
      results[letter].push(Number(i));
    } else {

      results[letter] = [Number(i)];
    }
  }
  delete results[" "];
  return results;
};
