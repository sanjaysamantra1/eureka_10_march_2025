import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule, EmployeeAddComponent, EmployeeTableComponent],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent {
   employees = [
    { id: 1, name: 'John Smith', position: 'Software Developer', department: 'Engineering', salary: 85000 },
    { id: 2, name: 'Emily Johnson', position: 'Project Manager', department: 'Management', salary: 95000 },
    { id: 3, name: 'Michael Williams', position: 'UX Designer', department: 'Design', salary: 78000 },
    { id: 4, name: 'Sarah Brown', position: 'QA Engineer', department: 'Engineering', salary: 75000 },
    { id: 5, name: 'David Jones', position: 'DevOps Specialist', department: 'Operations', salary: 92000 },
    { id: 6, name: 'Jennifer Garcia', position: 'HR Manager', department: 'Human Resources', salary: 88000 },
    { id: 7, name: 'Robert Miller', position: 'Data Analyst', department: 'Analytics', salary: 82000 },
    { id: 8, name: 'Lisa Davis', position: 'Marketing Specialist', department: 'Marketing', salary: 76000 },
    { id: 9, name: 'Thomas Wilson', position: 'System Administrator', department: 'IT', salary: 83000 },
    { id: 10, name: 'Patricia Anderson', position: 'Financial Analyst', department: 'Finance', salary: 90000 }
  ]

  addEmployee(newEmployee: any) {
    newEmployee.id = this.employees.length + 1;
    this.employees = [...this.employees, newEmployee];
  }
  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}
