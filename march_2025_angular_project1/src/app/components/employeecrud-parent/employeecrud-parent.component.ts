import { Component } from '@angular/core';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employeecrud-parent',
  imports: [
    EmployeeAddComponent,   
    EmployeeTableComponent
  ],
  templateUrl: './employeecrud-parent.component.html',
  styleUrl: './employeecrud-parent.component.css'
  
})
export class EmployeecrudParentComponent {
  employees = [
    { id: 1, name: 'Nihal', email: 'Nihal@example.com', sal: 45000 },
    { id: 2, name: 'Hari Nivas', email: 'harinivas@example.com', sal: 52000 },
    { id: 3, name: 'srikar', email: 'srikar@example.com', sal: 61000 },
    { id: 4, name: 'saicharan', email: 'saicharan@example.com', sal: 49000 }
  ];
   // Add a new employee
   addEmployee(emp: any) {
    const newEmp = { ...emp, id: this.employees.length + 1 };
    this.employees.push(newEmp);
  }

  // Delete an employee
  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }

}



