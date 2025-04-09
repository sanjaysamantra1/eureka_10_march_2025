import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import employees from '../assignment-march28/employees';

@Component({
  selector: 'app-employee-view-delete',
  imports:[CommonModule],
  standalone:true,
  templateUrl: './employee-view-delete.component.html',
  styleUrls: ['./employee-view-delete.component.css'],
  inputs:['employees'],
  outputs:['employeeDeleted']
})
export class EmployeeViewDeleteComponent {
 employees: any[] = [];
 employeeDeleted = new EventEmitter();
employee: any;

  deleteEmployee(eId: number) {
    this.employeeDeleted.emit(eId);
  }
}