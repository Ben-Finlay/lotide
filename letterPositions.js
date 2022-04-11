const letterPositions = function(sentence) {
  const results = {};


  for (i in sentence) {
    const letter = sentence[i];
    if (results[letter]) {
      results[letter].push(Number(i));
    } else {

      results[letter] = [Number(i)];
    }
  }
  delete results[" "];
  return results;
};

module.exports = letterPositions;