1./* Print the occurence of each character in a string
   input: 'entertainment'
   output: { e:3 , n:2 , t: 3 ....}*/
   let input= 'entertainment';
    let count = {};
    for (let char of input){
        if(char in count){
            count[char] = count[char]+1
        }else{
            count[char] = 1
        }
    }
    console.log(count)
/*
2. Print the character which is repeated max no of times
   input: 'hello world'
   output : 'L'*/
   let input1 = 'hello world';
   let countObj = {};
   for (let char of input1){
       if(char in countObj){
           countObj[char] = countObj[char]+1
       }else{
           countObj[char] = 1
       }
   }
   let maxCount = 0
   let maxChar = '';
   for (let char in countObj){//if we keep of its not iteratable
        console.log(char)
       if(countObj[char]>maxCount){
           maxCount = countObj[char]
           maxChar = char
       }
   }
   console.log(maxChar.toUpperCase())
/*
3. Swap The case for Each Character in a string 
   input: 'Hello World'
   output: 'hELLO wORLD'*/

   let input3 = 'Hello World';
   let newWord ='';
   for (char of input3) {
           if(char === char.toUpperCase()){
               newWord = newWord+char.toLowerCase()
           }else if(char === char.toLowerCase()){
               newWord = newWord+char.toUpperCase()
           }else{
               newWord = newWord+char;
           }

       }
       console.log(newWord);


4. /*Print the Abbreviation for a string
   input: 'Rabindra Nath Tagore'
   output: 'R. N. tagore'*/
let abr = 'Rabindra Nath Tagore';
let words = abr.split(' '); 
console.log(words)
let abbreviation = '';

for (let i = 0; i < words.length - 1; i++) {
    abbreviation =abbreviation+ words[i][0].toUpperCase() + '. '; 

}
abbreviation =abbreviation+ words[words.length - 1];


console.log(abbreviation);

5./* Shift the characters by the next character
   input:  'abcxyz'
   output: 'bcdyza'*/
   let input5 = 'abcxyz';
   let s = input5.split('');
   let result = ""
   for(let char of input5){
    char[1] = char[1] + 1;
   }
   console.log(s);
/*6. Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true*/
   function isValidParentheses(input) {
    const stack = [];
    for (const char of input) {
        if ('([{'.includes(char)) {
            stack.push(char);
        } else if (')]}'.includes(char)) {
            if ('([{'.indexOf(stack.pop()) !== ')]}'.indexOf(char)) {
                return false; 
            }
        }
    }
    return stack.length === 0; 
    }

const inputString = '([{ }])';
console.log(isValidParentheses(inputString)); 
/*

7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
    input: 'ABC'
    output: ABC , ACB , BCA, BAC ...*/
    function getDifferentTypes(str) {
        if (str.length !== 3) return [];

            const result = [];

            const permute = (prefix, remaining) => {
                if (remaining.length === 0) {
                result.push(prefix);
                } else {
                for (let i = 0; i < remaining.length; i++) {
                    permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
                }
                }
            };

  permute("", str);
  return result;
}

let userInput = prompt("Enter a 3-letter word:").toUpperCase().trim();


if (userInput.length === 3) {
  const perms = getDifferentTypes(userInput);
  console.log(perms.join(", "));
} else {
  alert("Please enter exactly 3 letters.");
}


/*
8. Ask user to enter a number and convert that to Roman value
   input:   9    12
   output : IX   XII*/
   function intToRoman(num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let roman = "";
  
    for (let i = 0; i < val.length; i++) {
      while (num >= val[i]) {
        roman += syms[i];
        num -= val[i];
      }
    }
  
    return roman;
  }
  
  let numberInput = prompt("Enter numbers separated by space (e.g., 9 12):");
  let numbers = numberInput.trim().split(/\s+/).map(Number);
  let romanNumerals = numbers.map(num => {
    return intToRoman(num);
  });
  
  console.log("Roman numerals: " + romanNumerals.join(" "));
  
   
/*
9. Ask user to enter a roman string and convert that to integer value
   input:   IX    XII
   output : 9     12*/

   function romanToInt(s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    let prev = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const current = map[s[i]];
        if (current < prev) {
            total -= current;
        } else {
            total += current;
        }
        prev = current;
    }

    return total;
}

let romanInput = prompt("Enter a Roman numeral (e.g., IX, XII):");

const romanResult = romanToInt(romanInput);
console.log(`The integer value of ${romanInput} is: ${result}`);