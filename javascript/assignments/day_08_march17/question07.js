// 7. add Dept info for each employee
//      employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
//  				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
//  	departments = [{ eId: 101, dept: "sales" },
//  				{ eId: 104, dept: "marketing" }]

let employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    				{ eId: 104, name: "reena", sal: 8000, gender: "female" }];

let departments = [{ eId: 101, dept: "sales" },
 				{ eId: 104, dept: "marketing" }]

employees = employees.map(employee => {
    let department = departments.find(department => department.eId === employee.eId);
    return { ...employee, dept: department ? department.dept : "Unknown" };
});

console.log(employees)

