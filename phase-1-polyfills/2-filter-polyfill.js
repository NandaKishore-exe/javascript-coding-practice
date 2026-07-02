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
