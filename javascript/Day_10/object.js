const { group } = require("console");

let employees = [{ eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 101, name: 'Pc', sal: 1234, gender: 'male' },
    { eId: 101, name: 'Likhi', sal: 5000, gender: 'female' }];
console.log(Object.entries(employees));
console.log(Object.values(employees));
console.log(Object.keys(employees));
const grouped = group(employees, "gender");
console.log(grouped);