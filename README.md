# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Ben Finlay as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @benfinlay/lotide`

**Require it:**

`const _ = require('@benfinlay/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head(array)`: returns the first entry in an array.
* `tail(array)`: returns an array with the first entry of the input array removed.
* `middle(array)`: returns and array with the middle values the input array.
* `countLetters(string)`: returns a count of all letters in a string.
* `countOnly(allItems, itemsToCount)`: takes in a collection of items and returns counts for a specific subset of those items. 
* `eqArrays(arr1, arr2)`: compares two arrays to check if they are the same.
* `eqObjects(object1, object2)`: compares two objects to check if they are the same.
* `findKey(obj, callback)`: takes in an object and callback. Scans the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue(obj, val)`: searches for a corresponding value, and returns the associated object key.
* `flatten(array)`: takes in an array with nested arrays, and returns a single array with all values.
* `letterPositions(string)`: takes in a string and returns an object with the keys as chars, and the values as the positions of the letters in the string.
* `map(array, callback)`: takes in an array and callback and return a new array based on the results of the callback function.
* `takeUntil(array, callback)`: returns a slice of an array starting from array[0], and stopping at when the callback value reaches a truthy position.
* `without(source, itemsToRemove)`: takes in two arrays, and removes any of values in the source array that appear in the itemsToRemove array.