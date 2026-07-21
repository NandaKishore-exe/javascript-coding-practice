function introduce(city) {
  console.log(this.name, city);
}

const person = {
  name: "Nanda",
};

Function.prototype.myApply = function (obj, args) {
  // 1. this should be a function
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }

  // 2. Handle null / undefined
  obj = obj ?? globalThis;

  // 3. Convert primitive values to objects
  obj = Object(obj);

  // handle undefined argument
  args = args ?? [];

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

console.log(introduce.myApply(person, ["chennai"]));
