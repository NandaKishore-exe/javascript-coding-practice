/*
=========================================================
Problem #07 - Array.prototype.some() Polyfill
Phase   : Polyfills
Status  : ✅ Completed
Pattern : Validate Any → Early Exit

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
4. If callback returns truthy, return true.
5. If loop completes, return false.

Complexity
----------
Time  : O(n)
Space : O(1)

Key Learnings
-------------
✓ some() checks if at least one element satisfies the condition.
✓ Stops on the first truthy result.
✓ Empty array returns false.
✓ Callback return value is treated as truthy/falsy.

Follow-ups
-----------
□ every()
□ thisArg
=========================================================
*/

const arr = [3, 1, 1, 2];

function callback(num) {
  return num > 18;
}

Array.prototype.mySome = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const result = arr.mySome(callback);

console.log(result);
