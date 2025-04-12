import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { id: 1, name: 'John Doe', gender: 'male', position: 'Developer' },
    { id: 2, name: 'Jane Smith', gender: 'female', position: 'Designer' },
    { id: 3, name: 'Mike Johnson', gender: 'male', position: 'Manager' },
    { id: 4, name: 'Sarah Williams', gender: 'female', position: 'HR' },
    { id: 5, name: 'David Brown', gender: 'male', position: 'Tester' }
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