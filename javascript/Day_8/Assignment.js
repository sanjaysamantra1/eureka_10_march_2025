let employees2 = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
//1. declare array of employees & sort them in ascending order (empId)
  employees.sort((a,b) =>
         a.eId - b.eId
)
  console.log(employees)
//2. declare array of employees & sort them in ascending order by name.
employees.sort((a,b)=>
    (a.name.localeCompare(b.name)));
console.log(employees)
//3. declare array of employees & filter the employees whose sal>6000;
console.log(employees.filter(emp => emp.sal > 6000));
//4. declare array of employees & increase sal of every employee by 500;
employees.map(emp => 
    emp.sal += 500)
console.log(employees)
//5. declare array of employees & add "comp:ibm" to every employee;
employees.forEach(emp => emp.comp = "IBM")//doesn't create a new array modifies the og 
console.log(employees)
employees.map(emp=>emp.comp = "IBM");//creates a new array
console.log(employees)
//6.convert array of letters to array of words
const inputArr = [ 
        'b', 'a', 'k', 'e', '',
        'c', 'a', 'k', 'e', '',
        'e', 'a', 't'
        ];
//output = ['bake','cake','eat'];

const output = inputArr.reduce((acc, char) => {
    if (char === '') {
        acc.push(''); 
    } else {
        acc[acc.length - 1] += char; 
    }
    return acc;
}, ['']);

console.log(output);

//7.add Dept info for each employee
   /* employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
	departments = [{ eId: 101, dept: "sales" },
				{ eId: 104, dept: "marketing" }]
employees.map((emp))*/
let employeesWithDept = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }];

let departments = [{ eId: 101, dept: "sales" },
 { eId: 104, dept: "marketing" }]

employeesWithDept = employeesWithDept.map(employee => {
let department = departments.find(department => department.eId === employee.eId);
return { ...employee, dept: department ? department.dept : "Unknown" };
});

console.log(employees)
/*8. declare array of employees & groupBy employees-namevsample output: {
    'sanjay' : [{},{}],
    'alok' : [{}]
}*/
let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'alok', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sanjay', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  
  let groupedEmployees = employees2.reduce((result, employee) => {
    if (!result[employee.name]) {
      result[employee.name] = [];
    }
    result[employee.name].push(employee);
    return result;
  }, {});
  
  console.log(groupedEmployees);
//9. intersection of 2 number arrays

function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    console.log(set1);

    return arr2.filter(num => set1.has(num));
}

// Example usage
const arr1 = [1, 2, 2, 3, 4, 5];
const arr2 = [2, 3, 5, 6];

console.log(intersection(arr1, arr2)); // Output: [2, 3, 5]

//10. WAP to print the occurance of each elements 
input11 = [10,20,30,40,50,10,30,50]
const out = input11.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;    
},{});
console.log(out);
a =['pajs',888,'dfghjk'];