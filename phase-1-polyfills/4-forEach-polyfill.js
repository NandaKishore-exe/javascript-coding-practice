/*
=========================================================
Problem #04 - Array.prototype.forEach() Polyfill
Phase   : Polyfills
Status  : ✅ Completed
Pattern : Iterate → Side Effects

Prerequisites
--------------
✓ Prototype methods
✓ this
✓ Callback Functions

Approach
---------
1. Validate callback.
2. Loop through `this`.
3. Execute callback(element, index, array).
4. Ignore callback return value.
5. Return undefined.

Complexity
----------
Time  : O(n)
Space : O(1)

Key Learnings
-------------
✓ forEach is used for iteration and side effects.
✓ Callback return value is ignored.
✓ No result array or accumulator is needed.
✓ Function returns undefined.

Follow-ups
-----------
□ Difference between map() and forEach()
□ Can callback mutate the original array?
=========================================================
*/

const nums = [1, 2, 3];

function callback(value) {
  console.log(value);
}

Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

console.log(nums.myForEach(callback));
