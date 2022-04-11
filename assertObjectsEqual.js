const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  let output = "";

  if (eqObjects(actual, expected)) {
    output = `🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
    
  } else {
    output = `🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    
  }

  return output;
  
};

module.exports = assertObjectsEqual;
