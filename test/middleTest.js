const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


//Test Code
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle(['a']), []);
assertArraysEqual(middle(['a', 'b', 'c']), ['b'])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([6, 7, 8, 9, 10, 11]), [8, 9])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])