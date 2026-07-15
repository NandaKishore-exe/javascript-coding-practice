/*
=========================================================
Problem #06 - Array.prototype.every() Polyfill
Phase   : Polyfills
Status  : ✅ Completed
Pattern : Validate All → Early Exit

Prerequisites
--------------
✓ Prototype methods
✓ this
✓ Callback Functions
✓ Truthy / Falsy

Approach
---------
1. Validate callback.
2. Loop through `this`.
3. Execute callback(element, index, array).
4. If callback returns falsy, return false.
5. If loop completes, return true.

Complexity
----------
Time  : O(n)
Space : O(1)

Key Learnings
-------------
✓ every() validates all elements.
✓ Stops on the first falsy result.
✓ Empty array returns true.
✓ Callback return value is treated as truthy/falsy.

Follow-ups
-----------
□ some()
□ thisArg
=========================================================
*/

const arr = [2, 4, 5, 8];

function callback(num) {
  return num % 2 === 0;
}

Array.prototype.myEvery = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const result = arr.myEvery(callback);

console.log(result);
