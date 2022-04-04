// Function Implementation
const assertEqual = function(actual, expected) {
  let output = "";
  
  if (actual === expected) {
    output = `🟢 Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `🔴 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(output);
};


// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(7, 7);
assertEqual(7, 1);
assertEqual("test", "test");
assertEqual("Test", "test");
