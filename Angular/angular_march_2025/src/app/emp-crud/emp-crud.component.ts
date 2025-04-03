import { Component } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

@Component({
  selector: 'app-emp-crud',
  imports: [
    EmployeeAddComponent,
    EmployeeTableComponent
  ],
  templateUrl: './emp-crud.component.html',
  styleUrl: './emp-crud.component.css'
})
export class EmpCRUDComponent {
  employees: Employee[] = [
    { id: 1, name: 'Neel Kawitkar', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, name: 'Shone Kelkar', position: 'CA', department: 'Finance' },
    { id: 3, name: 'Amogh Joshi', position: 'Mathematician', department: 'Education' }
  ];

  onAddEmployee(newEmployee: Omit<Employee, 'id'>) {
    const employee: Employee = {
      ...newEmployee,
      id: this.generateId()
    };
    this.employees = [...this.employees, employee];
  }

  onDeleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }

  private generateId(): number {
    return this.employees.length > 0 
      ? Math.max(...this.employees.map(emp => emp.id)) + 1 
      : 1;
  }
}
