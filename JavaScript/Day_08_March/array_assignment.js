let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
console.log(employees);

//Sort by empId (ascending):
employees.sort((a, b) => a.eId - b.eId); // since it's numeric sort write the logic
console.log("1. Sorted by eId:", employees);

// Sort by name (ascending):
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log("2. Sorted by name:", employees);

// Filter employees with salary > 6000:
const highPaid = employees.filter(emp => emp.sal > 6000);
console.log("3. Salary > 6000:", highPaid);

// Increase salary by 500 for each employee:
employees = employees.map(emp => ({...emp, sal: emp.sal + 500})); // ...emp is a spread operator
console.log("4. Salary increased by 500:", employees);


// Add "comp:ibm" to each employee:
employees = employees.map(emp => ({...emp, comp: 'ibm'}));
console.log("5. Added company:", employees);


// Add department info to employees
const departments = [
    {eId: 101, dept: "sales"},
    {eId: 104, dept: "marketing"}
];

employees = employees.map(emp => ({
    ...emp,
    dept: departments.find(d => d.eId === emp.eId)?.dept
}));
console.log("7. Added departments:", employees);


//Group employees by name:
const groupedByName = employees.reduce((acc, emp) => {
    acc[emp.name] = acc[emp.name] || [];
    acc[emp.name].push(emp);
    return acc;
}, {});
console.log("8. Grouped by name:", groupedByName);


// Intersection of two number arrays
const array1 = [1, 2, 3, 4];
const array2 = [2, 4, 6, 8];
const intersection = array1.filter(num => array2.includes(num));
console.log("9. Intersection:", intersection);


//Count occurrence of each element
const input = [10, 20, 30, 40, 50, 10, 30, 50];
const occurrence = input.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
console.log("10. Occurrences:", occurrence);




// Convert array of letters to array of words:
const inputArr = ['b', 'a', 'k', 'e', '', 'c', 'a', 'k', 'e', '', 'e', 'a', 't'];
console.log(inputArr);
const output = inputArr.reduce((acc, char) => {
    if (char === '') {
        if (acc.temp) {
            acc.words.push(acc.temp);
        }
        acc.temp = '';
    } else {
        acc.temp += char;
    }
    return acc;
}, { words: [], temp: '' }).words;

// Add the last word if there's any remaining temp
if (output.temp) {
    output.push(output.temp);
}
console.log("6. Letters to words:", output);