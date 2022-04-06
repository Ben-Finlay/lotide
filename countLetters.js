const assertEqual = function(actual, expected) {
  let output = "";
  
  if (actual === expected) {
    output = `🟢 Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `🔴 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(output);
};

const countLetters = (string) => {
  let str = string.replace(/[^\w\s]|_/g, "");
  str = str.replace(/\s/g, "");
  console.log(str);

  const letterCount = {};
  for (i of str) {
    letterCount[i] = letterCount[i] + 1 || 1;
  
  }

  return letterCount;
};

let string = "happy go lucky, is the best way to go through life, no doubt.";
console.log(countLetters(string));
console.log(countLetters("lighthouse in the house"))





















/*

const vowelCounter = (string) => {
  const vObj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  }
  //counts all values in an string
  //loop through string, check for specific key
  //increment key
  //returns back object
  for (i of string) {
    if (vObj[i] !== undefined) {
      vObj[i]++;
      
    }

    
  }

  console.log(vObj)
  return vObj;
}


console.log(vowelCounter(string));
*/