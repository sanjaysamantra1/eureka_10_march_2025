let arr1 = [10, 20];

let arr2 = arr1;  // neither shallow nor deep copy, reference copy
// a new array is not being created, rather the same reference is just being stored in arr2
arr2.push(30);
console.log('arr1 ', arr1);
console.log('arr2 ', arr2);


let arr3 = [10, 20, [30, 31]]; // use spread operator to perform shallow copy
let arr4 = [...arr3]; // value copy - shallow copy (can be used if we don't have nested array)
// only top level things are copied by value, and nested arrays are still copied by address
arr4.push(40,50);
arr4[2].push(32,33);
console.log('arr3 ', arr3);  // [10, 20, [30, 31]]
console.log('arr4 ', arr4);  // [10, 20, [30, 31, 32, 33], 40,50]
