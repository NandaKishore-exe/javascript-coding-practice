/*
=========================================================
Problem #05 - Array.prototype.find() Polyfill
Phase   : Polyfills
Status  : ✅ Completed
Pattern : Condition → Early Exit

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
4. If callback returns truthy, return current element.
5. If no match is found, return undefined.

Complexity
----------
Time  : O(n)
Space : O(1)

Key Learnings
-------------
✓ find returns the first matching element.
✓ Stops iterating after the first match.
✓ Returns undefined when no match exists.
✓ Callback return value is used only as a condition.

Follow-ups
-----------
□ findIndex()
□ thisArg
=========================================================
*/

const arr = [1, 2, 3, 4, 5];

function callback(num) {
  return num > 2;
}

Array.prototype.myFind = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return;
};

console.log(arr.myFind(callback));
