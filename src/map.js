function myMap(fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(fn(this[i]));
  }
  return newArray;
}

module.exports = myMap;

