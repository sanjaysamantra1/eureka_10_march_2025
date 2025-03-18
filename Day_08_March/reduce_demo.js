let arr = [10, 20, 30, 40, 50];
let res = arr.reduce((prev, next) => {
    console.log(prev, next);
    return prev + next;
}, 0); //  initial value is  0 is not required in case of input and return type are of same kind. Here both are numeric type.
console.log(`Sum of all the numbers : ${res}`);


let str = 'hello world'; // reverse using reduce()
let revStr = str.split('').reduce((accumulator, char) => {
    console.log(accumulator, char);
    return char + accumulator;
}, ''); // initial value is '' not required.
console.log(revStr);

let myStr = 'entertainment';  // output = {e:3,n:2,r:1...}
let result = myStr.split('').reduce((obj, char) => {
    console.log(obj, char)
    obj[char] = obj[char] ? obj[char] + 1 : 1;
    return obj;
}, {});
console.log(result);


let cartArr = [
    { itemId: 1, productName: 'Potato', qty: 2, price: 10 },
    { itemId: 2, productName: 'Lays', qty: 3, price: 5 }
]
let cartAmt = cartArr.reduce((amount, product) => {
    return amount + (product.price * product.qty);
}, 0);
console.log(cartAmt);