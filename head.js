
const assertEqual = function(actual, expected) {
  let output = "";
  
  if (actual === expected) {
    output = `🟢 Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `🔴 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(output);
};

const head = function(array) {
  let actual = array[0];
  return actual;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");