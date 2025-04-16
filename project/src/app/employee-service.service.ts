import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employees = [
    {
      "employee_id": "E001",
      "name": "John Doe",
      "gender": "Male",
      "department": "Marketing",
      "position": "Marketing Manager",
      "email": "johndoe@email.com",
      "phone": "(555) 123-4567",
      "date_of_hire": "2018-06-15",
      "salary": 75000
    },
    {
      "employee_id": "E002",
      "name": "Sarah Smith",
      "gender": "Female",
      "department": "Finance",
      "position": "Financial Analyst",
      "email": "sarahsmith@email.com",
      "phone": "(555) 234-5678",
      "date_of_hire": "2019-08-22",
      "salary": 68000
    },
    {
      "employee_id": "E003",
      "name": "Alex Johnson",
      "gender": "Male",
      "department": "IT",
      "position": "Software Engineer",
      "email": "alexj@email.com",
      "phone": "(555) 345-6789",
      "date_of_hire": "2021-01-10",
      "salary": 85000
    },
    {
      "employee_id": "E004",
      "name": "Emily Brown",
      "gender": "Female",
      "department": "HR",
      "position": "HR Specialist",
      "email": "emilybrown@email.com",
      "phone": "(555) 456-7890",
      "date_of_hire": "2020-05-25",
      "salary": 60000
    },
    {
      "employee_id": "E005",
      "name": "Michael Lee",
      "gender": "Male",
      "department": "Sales",
      "position": "Sales Executive",
      "email": "michaellee@email.com",
      "phone": "(555) 567-8901",
      "date_of_hire": "2022-11-03",
      "salary": 70000
    }
  ];
  

  constructor() {

   }
   getallEmployees(){
    return this.employees;
   }

   getAllMaleEmployees(){
    return this.employees.filter(emp=> emp.gender=== 'Male');
   }

   getAllFemaleEmployees(){
    return this.employees.filter(emp=> emp.gender ==='Female');
   }
}
