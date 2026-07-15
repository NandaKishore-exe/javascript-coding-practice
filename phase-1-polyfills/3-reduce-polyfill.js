/*
=========================================================
Problem #03 - Array.prototype.reduce() Polyfill
Phase   : Polyfills
Status  : ✅ Completed
Pattern : Accumulator

Prerequisites
--------------
✓ Prototype methods
✓ this
✓ Callback Functions
✓ Initial Value

Approach
---------
1. Validate callback.
2. Check if initialValue is provided.
3. Initialize accumulator.
4. Loop through `this`.
5. Update accumulator using callback.
6. Return final accumulator.

Complexity
----------
Time  : O(n)
Space : O(1)

Key Learnings
-------------
✓ Accumulator carries the result across iterations.
✓ Accumulator can be Number, String, Array, Object, etc.
✓ Check if initialValue is provided, not if it's truthy.
✓ Return the final accumulator.

Follow-ups
-----------
□ Handle empty array without initialValue.
□ Why use arguments.length instead of truthy check?
=========================================================
*/

const arr = [1, 2, 3, 4, 5, 6];

function getSum(acc, cur) {
  return acc + cur;
}

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const hasInitialValue = arguments.length > 1;
  let acc = hasInitialValue ? initialValue : this[0];
  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const total = arr.myReduce(getSum, 0);

console.log(total);
