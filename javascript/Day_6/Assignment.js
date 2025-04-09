1. /*WAP to reverse a string
	input:- 'sachin'
	output:- 'nihcas'*/
let str1 = "Sachin";
let revStr1 = str1.split('').reverse().join('');
console.log(revStr1);
/*
2. WAP to reverse words
	input:- 'This is javascript class'
	output:- 'class javascript is this'*/
let str2 = 'This is javascript class';
let revStr12 = str2.split(' ').reverse().join(' ');
console.log(revStr12);
/*
3. WAP to print the first non-repeated character in a string
   input:- 'entertainment'
   output:- r*/
   let repStr = 'entertainment';
    for(char of repStr){
      if(repStr.indexOf(char) === repStr.lastIndexOf(char)){
         console.log(char);
         break
      }
    }
/* 
4. WAP to print a string in title case
	input:- 'this is javascript class'
   output:- 'This Is Javascript Class'*/
   
      let str411 = 'this is javascript class';
      let str41= str411.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      console.log(str41);

	/*
5. WAP to find longest word in a sentence
	input:- 'this is javascript class'
    output:- javascript*/
    let str5 = 'this is javascript class';
    function findLongestWord(sentence) {
      let words = sentence.split(" ");
      let longestWord = words.reduce((longest, currentWord) => 
          currentWord.length > longest.length ? currentWord : longest, ""
      );
      return longestWord;
  }
  console.log(findLongestWord(str5));
	/*
6. WAP to print Account number
   input:- '12345678987'
   output:- '12*******87'*/
   function maskAccountNumber(accountNumber) {
      if (accountNumber.length < 4) return "Invalid Account Number";
      
      return accountNumber.substring(0, 2) + "*******" + accountNumber.substring(accountNumber.length - 2);
  }
  console.log(maskAccountNumber('12345678987'));

   /*
7. WAP to print Credit-card number
   input:- '1111222233334444'
   output:- '1111-2222-3333-4444'*/
   let str7 = '1111222233334444';
   console.log(str7.match(/.{1,4}/g).join("-"));
   /*
8. WAP to check if 2 strings are anagram or not
	'listen' - 'silent'    anagram(every char of str1 should be there in str2)*/
   function anagram1(str8, str81) {
      if (str8.length !== str81.length) {
          console.log('Not an anagram');
          return;
      }
      let sortedStr8 = str8.split('').sort().join('');
      let sortedStr81 = str81.split('').sort().join('');
  
      if (sortedStr8 === sortedStr81) {
          console.log("Yes, it is an anagram");
      } else {
          console.log("Not an anagram");
      }
  }
  anagram1('listen', 'silent');
	/*
9. WAP to remove special character from a string
   input:- 'hello@#hi&'
   output:- 'hellohi'*/
function removeSpecialChars(str9){
   return (str9.match(/[a-zA-Z0-9]/g) || []).join('');
}
console.log(removeSpecialChars('hello@#hi&'));


   /*
10. WAP to move all the special characters to the end of the string
	input:- 'hello@#hi&'
   output:- 'hellohi@#&'*/
   function moveSpecialCharsToEnd(str) {
      let alphanumeric = str.match(/[a-zA-Z0-9]/g) || [];
      let specialChars = str.match(/[^a-zA-Z0-9]/g) || [];
      return alphanumeric.join('') + specialChars.join('');
  }
  const input = 'hello@#hi&';
  const output = moveSpecialCharsToEnd(input);
  console.log(output); 