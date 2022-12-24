function myMap(fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(fn(this[i]));
  }
  return newArray;
}

function myFilter(fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
}

function myReduce(fn, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = fn(accumulator, this[i]);
  }
  return accumulator;
}

module.exports = {
  myMap,
  myFilter,
  myReduce,
};

