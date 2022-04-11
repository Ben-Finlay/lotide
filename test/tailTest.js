let chai = require('chai');
let assert = chai.assert;

//const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Test Code
describe("#tail", () => {
  it("Number test: returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
  it("String test: returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("Single value: returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });

  it("Empty array: returns [] for []", () => {
    assert.deepEqual(tail([]), []); 
  });

});
