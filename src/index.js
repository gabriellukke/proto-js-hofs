const array = [1, 2, 3, 4, 5];

const mappedArray = array.map(n => n * 2);
console.log('js map', mappedArray); // [2, 4, 6, 8, 10]

const myMap = (array, fn) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(fn(array[i]));
  }
  return newArray;
}

const myMappedArray = myMap(array, n => n * 2);
console.log('my map', myMappedArray);

function myPrototypeMap(fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(fn(this[i]));
  }
  return newArray;
}

// Array.prototype.myMap = myPrototypeMap;
// Object.assign(Array.prototype, { myMap: myPrototypeMap });
Object.defineProperty(Array.prototype, 'myMap', {
  value: myPrototypeMap,
  writable: true,
  enumerable: false,
  configurable: true
});

const myPrototypeMappedArray = array.myMap(n => n * 2);
console.log('my prototype map', myPrototypeMappedArray);

