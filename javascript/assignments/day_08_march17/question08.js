// 8. declare array of employees & groupBy employees-name
//      sample output: {
//  		'sanjay' : [{},{}],
//  		'alok' : [{}]
//  	}

let employees = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'alok', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sanjay', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

let groupedEmployees = employees.reduce((result, employee) => {
  if (!result[employee.name]) {
    result[employee.name] = [];
  }
  result[employee.name].push(employee);
  return result;
}, {});

console.log(groupedEmployees);


