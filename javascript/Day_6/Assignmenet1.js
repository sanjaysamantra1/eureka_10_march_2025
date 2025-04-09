function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = words.reduce((longest, currentWord) => 
        currentWord.length > longest.length ? currentWord : longest, ""
    );
    return longestWord;
}
console.log(findLongestWord("This is Javascript Class"));

function maskAccountNumber(accountNumber) {
    if (accountNumber.length < 4) return "Invalid Account Number";
    
    return accountNumber.substring(0, 2) + "*******" + accountNumber.substring(accountNumber.length - 2);
}
console.log(maskAccountNumber('12345678987'));

let str7 = '1111222233334444';
console.log(str7.match(/.{1,4}/g).join("-"));

function anagram1(str8,str81){
    if((str8.split('').sort().join('')) === (str81.split('').sort().join(''))){
       console.log("Yes it is an anagram");
    }
    else{
       console.log("Not an anagram");
    }
 
 }
 anagram1('listen','silent');

 function removeSpecialChars(str9){
    return (str9.match(/[a-zA-Z0-9]/g) || []).join('');
 }
 console.log(removeSpecialChars('hello@#hi&'));
 function joinAll(str10){
    let specialChar = str9.match(/[a-zA-Z0-9]/g) || [].join('');
    let nonSpecialchar = str10.match(/^[a-zA-Z0-9]/g) ||[] .join('');
    console.log(specialChar + nonSpecialchar);
 
 }
 joinAll('hello@#hi&');

let input1 = 'entertainment';
for (let i = 0; i < input1.length; i++) {
    console.log(input1.indexOf(input1[i]));
}