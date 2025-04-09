import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employees = [
    { id: 1, name: 'Nihal', gender: 'male' },
    { id: 2, name: 'srikar', gender: 'Male' },
    { id: 3, name: 'alekya', gender: 'Female' },
    { id: 4, name: 'akila', gender: 'Female' },
    { id: 5, name: 'ravali', gender: 'Female'},
    { id: 6, name: 'pravalika', gender: 'Female'},
    { id: 7, name: 'vamshi', gender: 'Male'},
    { id: 8, name: 'saicharan', gender: 'Male'},
    { id: 9, name: 'sairaj', gender: 'Male'},
  ];


  getAllEmployees(){
    return this.employees;
  }

  getMaleEmployees(){
    return this.employees.filter(emp => emp.gender.toLowerCase() === 'male');
  }

  getFemaleEmployees(){
    return this.employees.filter(emp => emp.gender.toLowerCase() === 'female');
  }

}
