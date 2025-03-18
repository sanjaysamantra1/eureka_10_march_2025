//add Dept info for each employee
    let employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
								 { eId: 104, name: "reena", sal: 8000, gender: "female" }]
		let departments = [{ eId: 101, dept: "sales" },
								 { eId: 104, dept: "marketing" }]


		let deptMap = new Map(departments.map(dept => [dept.eId, dept.dept]))
		
		// Loop through employees and add department info using the Map
		employees.forEach(employee => {
		employee.dept = deptMap.get(employee.eId);
		});
							
		console.log(employees);