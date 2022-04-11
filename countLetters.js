const countLetters = (string) => {
  let str = string.replace(/[^\w\s]|_/g, "");
  str = str.replace(/\s/g, "");
  
  const letterCount = {};
  for (i of str) {
    letterCount[i] = letterCount[i] + 1 || 1;
  
  }

  return letterCount;
};

module.exports = countLetters;