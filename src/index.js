const { myMap } = require('./hofs');

const array = [1, 2, 3, 4, 5];

// Array.prototype.myMap = myPrototypeMap;
// Object.assign(Array.prototype, { myMap: myPrototypeMap });
Object.defineProperty(Array.prototype, 'myMap', {
  value: myMap,
  writable: true,
  enumerable: false,
  configurable: true
});

const myPrototypeMappedArray = array.myMap(n => n * 2);
console.log('my prototype map', myPrototypeMappedArray);

