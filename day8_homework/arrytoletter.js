/*convert array of letters to array of words
	   output = ['bake','cake','eat'];*/
// const inputArr = ['b', 'a', 'k', 'e', '','c', 'a', 'k', 'e', '','e', 'a', 't'];

//let data  = inputArr.join('').split('').filter(tmp => tmp!=='')

//console.log(typeof data);
//console.log(data);

const inputArr = [ 
  'b', 'a', 'k', 'e', '',
  'c', 'a', 'k', 'e', '',
  'e', 'a', 't'
];

let output = inputArr.join('')
let f1 = [output.slice(0, 4), output.slice(4, 8), output.slice(8)];

//const output = inputArr.join('').split('').filter(item => item !== ''); // Join all letters and split by empty string, then remove empty ones.
//let result = [output.slice(0, 4), output.slice(4, 8), output.slice(8)];
//let result1 = result.map(arr =>arr.join(''))
console.log(f1); // Output: ['bake', 'cake', 'eat']
