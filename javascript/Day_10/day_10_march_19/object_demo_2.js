let user = { firstName: 'sachin', lastName: 'tendulkar', age: 35, add: 'mumbai' };

// length of object
console.log(user.length); // undefined

let allKeys = Object.keys(user);
console.log(allKeys, allKeys.length); // 4
