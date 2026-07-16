/*
=========================================================
Problem #08 - Function.prototype.call() Polyfill
Phase   : Polyfills
Status  : ✅ Completed
Pattern : Explicit this Binding

Prerequisites
--------------
✓ this keyword
✓ Prototype methods
✓ Function invocation
✓ Objects
✓ Symbol

Approach
---------
1. Validate `this` is a function.
2. Handle null/undefined using globalThis.
3. Convert primitive values to objects.
4. Create a unique Symbol key.
5. Attach function to object.
6. Execute with arguments.
7. Delete temporary property.
8. Return function result.

Complexity
----------
Time  : O(1)
Space : O(1)

Key Learnings
-------------
✓ `this` inside myCall is the function itself.
✓ Temporarily attaching a function changes its invocation context.
✓ Use Symbol to avoid property collisions.
✓ Return the original function's return value.
✓ Handle null/undefined and primitive values.

Follow-ups
-----------
□ apply()
□ bind()
=========================================================
*/

function introduce(city) {
  console.log(this.name, city);
}

const person = {
  name: "Nanda",
};

Function.prototype.myCall = function (obj, ...args) {
  // 1. this should be a function
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }

  // 2. Handle null / undefined
  obj = obj ?? globalThis;

  // 3. Convert primitive values to objects
  obj = Object(obj);

  // 4. Create unique property
  const uniqueKey = Symbol();

  // 5. Attach function
  obj[uniqueKey] = this;

  // 6. Execute function
  const result = obj[uniqueKey](...args);

  // 7. Cleanup
  delete obj[uniqueKey];

  // 8. Return result
  return result;
};

introduce.myCall(person, "chennai");
