const { type } = require("os");

let array = [10,20];
let b = {x: 10, y:20};
console.log(typeof array);
console.log(typeof b);

console.log(Array.isArray(array));

console.log(Array.isArray(b));

//Array is an object and every array is an object, every object is not an array

console.log(array instanceof Object);
console.log(b instanceof Object);

