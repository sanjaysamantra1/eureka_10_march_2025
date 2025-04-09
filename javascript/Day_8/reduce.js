let arr = [12,32,34,21,3344];
let a = arr.reduce((prev, next) => {
    return prev * next;
});
console.log(a)
let str = 'hello world';
let revstr = str.split('').reduce((prev,cur) =>{
    return cur+prev;
});
console.log(revstr);

let myStr = 'entertainment';
let res3 = myStr.split('').reduce((obj,char)=>{
        obj[char] = obj[char] ? obj[char] + 1 : 1;
        return obj;
        
},{});
console.log(res3);