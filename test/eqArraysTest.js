const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); //true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); //failse
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), true); //false