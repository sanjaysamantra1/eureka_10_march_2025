import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

// Assignment
// ==========
// 1. create an EmployeeService
// 	Service should have 1 variable.  ex: employees = [ {}, {}, {} {}]   
// 	Service should have 3 methods.   ex: getAllEmployees(), getMaleEmployees(), getFemaleEmployees()
// 2. inject that service in EmployeeComponent
// 3. Display List of Employees in a table / Card
//    have a dropdown with 3 values- allEmployees , maleEmployees , femaleEmployees
//    based on the dropdown value selected, employee data should be shown

export class EmployeeServiceService {
employees =[
    {
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "gender": "Male",
      "position": "Software Engineer",
      "department": "Engineering",
      "salary": 90000,
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 28,
      "gender": "Female",
      "position": "Product Manager",
      "department": "Product",
      "salary": 95000,
      "email": "jane.smith@example.com"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "age": 35,
      "gender": "Male",
      "position": "DevOps Engineer",
      "department": "Infrastructure",
      "salary": 100000,
      "email": "michael.johnson@example.com"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "age": 32,
      "gender": "Female",
      "position": "UX Designer",
      "department": "Design",
      "salary": 85000,
      "email": "emily.davis@example.com"
    },
    {
      "id": 5,
      "name": "Robert Wilson",
      "age": 40,
      "gender": "Male",
      "position": "Senior Architect",
      "department": "Engineering",
      "salary": 120000,
      "email": "robert.wilson@example.com"
    },
    {
      "id": 6,
      "name": "Sophia Martinez",
      "age": 29,
      "gender": "Female",
      "position": "Marketing Specialist",
      "department": "Marketing",
      "salary": 75000,
      "email": "sophia.martinez@example.com"
    },
    {
      "id": 7,
      "name": "Daniel Lee",
      "age": 33,
      "gender": "Male",
      "position": "Data Scientist",
      "department": "Analytics",
      "salary": 110000,
      "email": "daniel.lee@example.com"
    },
    {
      "id": 8,
      "name": "Olivia Brown",
      "age": 26,
      "gender": "Female",
      "position": "HR Manager",
      "department": "Human Resources",
      "salary": 80000,
      "email": "olivia.brown@example.com"
    },
    {
      "id": 9,
      "name": "David Anderson",
      "age": 37,
      "gender": "Male",
      "position": "IT Manager",
      "department": "IT",
      "salary": 95000,
      "email": "david.anderson@example.com"
    },
    {
      "id": 10,
      "name": "Isabella White",
      "age": 31,
      "gender": "Female",
      "position": "Business Analyst",
      "department": "Finance",
      "salary": 90000,
      "email": "isabella.white@example.com"
    }
  ];
  constructor() { 
     
  }
  getAllEmployees(){
        return this.employees;
  }
  getMaleEmployees(){
    return this.employees.filter(emp=>emp.gender === 'Male');
  }
  getFemaleEmployees(){
    return this.employees.filter(emp=>emp.gender === 'Female');
  }
}
