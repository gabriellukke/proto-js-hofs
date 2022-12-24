const { myMap, myFilter } = require('./hofs');

const array = [1, 2, 3, 4, 5];

// Array.prototype.myMap = myPrototypeMap;
// Object.defineProperty(Array.prototype, 'myMap', {
//  value: myMap,
//  writable: true,
//  enumerable: false,
//  configurable: true
// });
Object.assign(Array.prototype, { myMap: myMap });
const myPrototypeMappedArray = array.myMap(n => n * 2);
console.log('my prototype map', myPrototypeMappedArray);

Object.assign(Array.prototype, { myFilter: myFilter });
const myPrototypeFilteredArray = array.myFilter(n => n % 2 === 0);
console.log('my prototype filter', myPrototypeFilteredArray);

