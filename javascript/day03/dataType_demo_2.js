let a = [10, 20];
let b = {x : 10 , y : 20};

console.log(typeof a); // Object
console.log(typeof b); // Object

console.log(Array.isArray(a)) // true
console.log(Array.isArray(b)) // false

console.log(a instanceof Object); //true
console.log(b instanceof Object); // true