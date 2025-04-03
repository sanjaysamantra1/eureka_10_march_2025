import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'Neel Kawitkar', email: 'neel16@gmail.com', phone: '1234567890', department: 'IT', position: 'Developer' },
    { id: 2, name: 'Amogh Joshi', email: 'amogh@hotmail.com', phone: '0987654321', department: 'Math', position: 'Teacher' }
  ];

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  getNextId(): number {
    return this.employees.length > 0 
      ? Math.max(...this.employees.map(emp => emp.id)) + 1 
      : 1;
  }
}