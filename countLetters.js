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
  
  const letterCount = {};
  for (i of str) {
    letterCount[i] = letterCount[i] + 1 || 1;
  
  }

  return letterCount;
};

let string = "happy go lucky, is the best way to go through life, no doubt.";
console.log(countLetters(string));
console.log(countLetters("lighthouse in the house"))