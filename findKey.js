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


module.exports = findKey;
