let arr1 = [10, 50, 40, 20, 30];
arr1.sort();
console.log(arr1);

let cars = ['Tata', 'honda', 'maruti', 'bmw'];
cars.sort();
console.log(cars);

let arr2 = [10, 109, 91, 94, 93, 9, 7, 6, 105, 103]
arr2.sort();
console.log(arr2);

// How to perform Numeric sort
arr2.sort((a, b) => {
    // console.log(a,b);
    return a-b;
});  // ascending
console.log(arr2);

arr2.sort((a, b) => b - a);  // descending
console.log(arr2);