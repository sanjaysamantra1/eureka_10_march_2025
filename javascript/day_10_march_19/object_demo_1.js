let user = { name: 'sachin', 'last name': 'tendulkar', age: 35, add: 'mumbai' };

console.log('Name is:', user.name);
console.log('Age is:', user['age']);

// if object key contains space, [] should be used
// console.log(user.last name);
console.log(user['last name']);

// when object key is stored as a value in a variable
let x = 'add';
console.log('address is:',user.x);  // undefined
console.log('address is:',user[x]); // mumbai
