const assertEqual = require('../assertEqual');

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp"); //fail
assertEqual(1, 1); //pass
assertEqual(7, 7); //pass
assertEqual(7, 1); //fail
assertEqual("test", "test"); //pass
assertEqual("Test", "test"); //fail