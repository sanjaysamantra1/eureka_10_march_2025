//3. declare array of employees & filter the employees whose sal>6000;
let employees = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];


let sal =  employees.filter((a)=> a.sal >6000)
console.log(sal)