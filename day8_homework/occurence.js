//WAP to print the occurance of each elements 
  let input = [10,20,30,40,50,10,30,50]

  let result = input.reduce((char,data)=>{
    char[data] = char[data] ? char[data] + 1 : 1;
    return char
  },{})
  console.log(result);