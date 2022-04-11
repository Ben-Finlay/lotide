const findKeyByValue = (obj, val) => {
  //this loops through the object keys
  for (let i in obj) {
    //this checks the key value with the value we are expecting
    if (obj[i] === val) return i;
    //if they match, we return the key

  }

};

module.exports = findKeyByValue;