const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let obj1keys = Object.keys(object1);
  let obj2keys = Object.keys(object2);

  if (obj1keys.length !== obj2keys.length) {
    return false;
  }
  
  for (let key of obj1keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;
