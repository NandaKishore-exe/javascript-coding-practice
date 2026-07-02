/*
=========================================================
Problem #01 - Array.prototype.map() Polyfill
Phase   : Polyfills
Status  : ✅ Completed

Prerequisites
--------------
✓ Prototype methods
✓ this
✓ Callback Functions
✓ Higher Order Functions

Approach
---------
1. Validate callback.
2. Create a new result array.
3. Loop through `this`.
4. Execute callback(element, index, array).
5. Push returned value into result.
6. Return result array.

Complexity
----------
Time  : O(n)
Space : O(n)

Key Learnings
-------------
✓ map doesn't transform values, callback does.
✓ map stores whatever callback returns.
✓ Function without return => undefined.
✓ `this` refers to the calling array.

Follow-ups
-----------
□ thisArg
□ Sparse arrays
=========================================================
*/

const arr = [1, 2, 3, 4, 5];

function callback(num) {
  return num ** 2;
}

Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }
  let resultArr = [];

  for (let i = 0; i < this.length; i++) {
    resultArr.push(callback(this[i], i, this));
  }

  return resultArr;
};

const result = arr.myMap(callback);

console.log(result);
