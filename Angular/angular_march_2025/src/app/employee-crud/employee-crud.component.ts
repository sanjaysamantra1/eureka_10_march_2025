import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { MESSAGES } from '../constants/messages.const';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatButtonModule
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})

export class EmployeeCRUDComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    department: '',
    position: ''
  };

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  addEmployee(): void {
    this.newEmployee.id = this.employeeService.getNextId();
    this.employeeService.addEmployee(this.newEmployee);
    this.snackBar.open(MESSAGES.EMPLOYEE_ADDED, 'Close', { duration: 3000 });
    this.loadEmployees();
    this.resetForm();
  }

  deleteEmployee(id: number): void {
    if (confirm(MESSAGES.DELETE_CONFIRM)) {
      this.employeeService.deleteEmployee(id);
      this.snackBar.open(MESSAGES.EMPLOYEE_DELETED, 'Close', { duration: 3000 });
      this.loadEmployees();
    }
  }

  viewEmployee(id: number): void {
    const employee = this.employeeService.getEmployeeById(id);
    if (employee) {
      this.dialog.open(EmployeeDetailComponent, {
        width: '500px',
        data: employee
      });
    }
  }

  resetForm(): void {
    this.newEmployee = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      department: '',
      position: ''
    };
  }
}
