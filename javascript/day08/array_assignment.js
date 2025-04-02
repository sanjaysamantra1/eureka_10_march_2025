// 1. declare array of employees & sort them in ascending order (empId)

let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

employees.sort((a, b) => a.eId - b.eId)
console.log(employees);

// 2. declare array of employees & sort them in ascending order by name.
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(employees);

// 3. declare array of employees & filter the employees whose sal>6000;

let sal = employees.filter(employees => employees.sal > 6000);
console.log(sal);

// 4. declare array of employees & increase sal of every employee by 500;

employees.forEach(employees => { employees.sal += 500 })
console.log(employees);

// 5. declare array of employees & add "comp:ibm" to every employee;

employees.forEach(employees => employees.com = 'ibm');
console.log(employees);

// 6. convert array of letters to array of words
const inputArr = [
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
];
let out = [];
let temp = '';
for (a of inputArr) {
    if (a !== '') {
        temp += a;
    } else {
        out.push(temp);
        temp = '';
    }
}
if (temp != '') {
    out.push(temp)
}
console.log(out);

let res = inputArr.reduce((a, c) => {
    if (c !== '') {
        a.temp += c;
    } else if (a.temp !== '') {
        a.out.push(a.temp);
        a.temp = '';
    }
    return a
}, { out: [], temp: '' })

if (res.temp !== '') {
    res.out.push(res.temp);
}
console.log(res.out);


// 7. add Dept info for each employee
let nemployees = [{ eId: 101, name: "sanjay", sal: 5000, gender: "male" },
{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
let ndepartments = [{ eId: 101, dept: "sales" },
{ eId: 104, dept: "marketing" }]

let resMerge = nemployees.map(a => {
    let dept = ndepartments.find(d => d.eId === a.eId);
    // const newEmp = {};
    // newEmp.eId = a.eId;
    // newEmp.name = a.name;
    // newEmp.sal = a.sal;
    // newEmp.gender = a.gender;
    // newEmp.dept = dept ? dept.dept : null;
    let res = { ...a, dept: dept ? dept.dept : null };
    return res;
})
console.log(resMerge);


// 8. declare array of employees & groupBy employees-name
// sample output: {
// 	'sanjay' : [{},{}],
// 	'alok' : [{}]
// }
console.log('Eight');
const arremployees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 102, name: "alok", sal: 6000, gender: "male" },
    { eId: 103, name: "sanjay", sal: 5500, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" },
    { eId: 105, name: "alok", sal: 6500, gender: "male" }
];

let grpbyEmp = arremployees.reduce((a, b) => {
    if (!a[b.name]) {
        a[b.name] = [];
    }
    a[b.name].push(b);
    return a;
}, {});
console.log(grpbyEmp);

//   9. intersection of 2 number arrays

let arr1 = [10, 15, 12, 13, 19, 20, 23, 45, , 44];
let arr2 = [15, 46, 44, 12, 19];

let intersection = arr1.filter(a => arr2.includes(a))
console.log(intersection);

//   10. WAP to print the occurance of each elements 
//   input = [10,20,30,40,50,10,30,50]
//   output = {10:2, 20:1, 30:2 , 40:1, 50:2}

let input = [10, 20, 30, 40, 50, 10, 30, 50];
let output = input.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1
    return a;
}, {})
console.log(output);
