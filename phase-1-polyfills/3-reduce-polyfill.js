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
