import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  // Service should have 1 variable.  ex: employees = [ {}, {}, {} {}]   
	// Service should have 3 methods.   ex: getAllEmployees(), getMaleEmployees(), getFemaleEmployees()

  employees = [
    {id:'27', name: 'veeresh Doe', gender: 'M', age: 30, position: 'Developer' },
    {id:'28', name: 'Alice Smith', gender: 'F', age: 28, position: 'Designer' },
    {id:'58', name: 'Bob Johnson', gender: 'M', age: 35, position: 'Manager' },
    {id:'38', name: 'Emma Watson', gender: 'F', age: 25, position: 'HR' }
  ];

  getAllEmployees()
  {
      return this.employees;
  }
  getEmployeesByGender(gender : string)
  {
    console.log("sainikudu ",gender);
    return this.employees.filter((employee: { gender: any; }) => employee.gender == gender);
  }
}
