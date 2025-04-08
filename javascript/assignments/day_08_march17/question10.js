// 10. WAP to print the occurance of each elements 
//      input = [10,20,30,40,50,10,30,50]
//  	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

let input = [10,20,30,40,50,10,30,50]

let result = input.reduce((obj, char) => {
  obj[char] = obj[char] ? obj[char] + 1 : 1;
  return obj;
}, {});
console.log(result);