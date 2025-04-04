import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private employees = [
    { id: 1, name: 'Neel Kawitkar', gender: 'male', age: 28, department: 'Software engineer' },
    { id: 2, name: 'Sakshi', gender: 'female', age: 28, department: 'IT' },
    { id: 3, name: 'Shone Kelkar', gender: 'male', age: 28, department: 'Finance' },
  ];

  constructor() { }

  getAllEmployees() {
    return this.employees;
  }

  getMaleEmployees() {
    return this.employees.filter(emp => emp.gender === 'male');
  }

  getFemaleEmployees() {
    return this.employees.filter(emp => emp.gender === 'female');
  }
}
