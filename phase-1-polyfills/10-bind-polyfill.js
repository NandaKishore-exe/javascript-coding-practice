function greet(city) {
  console.log(this.name, city);
}

const person = {
  name: "Nanda",
};

Function.prototype.myBind = function (obj, ...bindArgs) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }

  const originalFunction = this;

  return function (...callArgs) {
    return originalFunction.call(obj, ...bindArgs, ...callArgs);
  };
};
const fn = greet.myBind(person, "Chennai");

fn();
