const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log(tail([1, 2, 3, 4])); //should give us an array [ 2, 3, 4 ]
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
console.log(tail([1])); //should return an empty array
console.log(tail([])); // should return an empty array