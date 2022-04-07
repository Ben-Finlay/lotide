const assertEqual = function(actual, expected) {
  let output = "";
  
  if (actual === expected) {
    output = `🟢 Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `🔴 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(output);
};

const findKey = function(obj, callback) {
  //iterates through the parent object keys
  for (let i in obj) {
    //if callback value is true for child object value
    if (callback(obj[i])) {
      //return parent object.
      return i;
    }
  }
};


//Example

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

//Comparison Test

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma")); // => "noma"
