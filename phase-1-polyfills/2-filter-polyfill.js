/*
=========================================================
Problem #02 - Array.prototype.filter() Polyfill
Phase   : Polyfills
Status  : ✅ Completed

Prerequisites
--------------
✓ Prototype methods
✓ this
✓ Callback Functions
✓ Truthy / Falsy
✓ Higher Order Functions

Approach
---------
1. Validate callback.
2. Create a new result array.
3. Loop through `this`.
4. Execute callback(element, index, array).
5. If callback returns truthy, push original element.
6. Return result array.

Complexity
----------
Time  : O(n)
Space : O(n)

Key Learnings
-------------
✓ filter stores the original element.
✓ Callback acts as a condition.
✓ filter accepts truthy/falsy values, not only true/false.
✓ `this` refers to the calling array.

Follow-ups
-----------
□ thisArg
□ Sparse arrays
=========================================================
*/
const arr = [1, 2, 3, 4, 5, 6];

function callback(num) {
  return num > 3;
}

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      tempArr.push(this[i]);
    }
  }
  return tempArr;
};

const result = arr.myFilter(callback);

console.log(result);
