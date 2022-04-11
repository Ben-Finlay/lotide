let chai = require('chai');
let assert = chai.assert;

const middle = require('../middle');

//Test Code
describe("#tail", () => {
  it("Number test: returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  
  it("String test: returns ['b'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(['a', 'b', 'c']), ['b']);
  });

  it("Single value: returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });

});
