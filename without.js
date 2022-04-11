const without = function(source, itemsToRemove) {
  let outputArray = source;
  
  outputArray = outputArray.filter(value => !itemsToRemove.includes(value));
  
  return outputArray;
  
};

module.exports = without;