// 9. intersection of 2 number arrays

let arr1 = [1,2,3,4,5,6]
let arr2 = [3,4,5,9,10,23]

let newArr = arr1.filter((item)=> arr2.includes(item))
console.log(newArr);