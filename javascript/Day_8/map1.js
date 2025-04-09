let arr = [13, 4, 23, 44, 1];
arr.sort();//considers them as strings
console.log(arr);
arr.sort((a, b) => a - b);//Numeric Sort Asc
console.log(arr);
arr.sort((a, b) => b - a);//Numeric Sort Dsc
arr.toSorted();
console.log(arr)
arr.reverse()
console.log(arr)
