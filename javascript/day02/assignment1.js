alert(`Enter Values for Addition using parsing`);
let first_value = parseInt(prompt(`Enter First Value`,'0'));
let second_value = parseInt(prompt(`Enter second values`,'0'));
alert(`Addition of 2 values ${first_value} & ${second_value} is : ${first_value+second_value}`)
alert(`Enter Values for Addition wihtout parsing`);
let fv = +prompt(`Enter First Value`,'0');
let sv = +prompt(`Enter second values`,'0');
alert(`Addition of 2 values ${fv} & ${sv} is : ${fv+sv}`)