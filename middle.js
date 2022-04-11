const middle = function(array) {
  middleArray = [];
  midval = 0;
  if (array.length === 1 || array.length === 2 ) {
    
    return middleArray;
  } else if (array.length % 2 !== 0) {
    midval = Math.floor(array.length / 2)
    middleArray.push(array[midval]);
    
    return middleArray
  } else {
    midval = Math.floor(array.length / 2)
    middleArray.push(array[midval - 1]);
    middleArray.push(array[midval]);
    
    return middleArray;
  }
};

module.exports = middle;

console.log(middle(['a', 'b', 'c']))


