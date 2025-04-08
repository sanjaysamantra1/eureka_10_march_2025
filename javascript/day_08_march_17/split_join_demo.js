let str = 'This is Javascript session';

let words = str.split(' ');
console.log(words); // [ 'This', 'is', 'Javascript', 'session' ]

let sentence = words.join(' ');
console.log(sentence)

console.log(words.join('-'));
console.log(words.join('*'));