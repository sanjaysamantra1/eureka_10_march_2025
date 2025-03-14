var a = 10;
let b = 20;
const c = 30;

console.log(`a:${a}, b:${b}, c:${c}`);

a = 4;
b = 78;
// c = 45; //TypeError: Assignment to constant variable

console.log(`a:${a}, b:${b}, c:${c}`);

const students = ['Neel', 'Kawitkar'];
console.log(students);
students.push('Chandrashekhar'); // push is allowed
console.log(students);

// students = ['Nachi', 'Bhakti']; 
//NOT ALLOWED: trying to assign a new array to the varialbe students

let user = {name: 'Neel', age: 25, address: 'VA'};
user.age = 25;
console.log(user);

// user = {name: 'oppo', age: 28}; // NOT ALLOWED
