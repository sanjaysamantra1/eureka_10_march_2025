// 6. convert array of letters to array of words
//  		const inputArr = [ 
//  				'b', 'a', 'k', 'e', '',
//  				'c', 'a', 'k', 'e', '',
//  				'e', 'a', 't'
//  				];
//  	   output = ['bake','cake','eat'];

let inputArr = [ 
   				'b', 'a', 'k', 'e', '',
   				'c', 'a', 'k', 'e', '',
   				'e', 'a', 't'
   				];
// console.log(inputArr.join('').split(' '))

let arr = []
let str = ''
for (char of inputArr){
  if(char != ''){
    str = str+char; 
  }else{
    arr.push(str)
    str = ''
  }
}
arr.push(str)
console.log(arr)
