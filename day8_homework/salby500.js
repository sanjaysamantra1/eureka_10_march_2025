//4. declare array of employees & increase sal of every employee by 500;
let employees = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

let Incsal = employees.map((a) => {
  a.sal = a.sal+500;
  return a;
})
console.log(Incsal)