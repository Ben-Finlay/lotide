const flatten = function(array) {
  let flattened = array.reduce((a, b) => {
    return a.concat(b);
  }, []);
  console.log(flattened);
  return flattened;
};

module.exports = flatten;