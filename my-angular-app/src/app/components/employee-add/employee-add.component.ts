import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports:[FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  @Output() employeeAdded = new EventEmitter<any>();

  newEmployee = { name: '', username: '', companyname: '', email: '', phone: '' };

  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.username && this.newEmployee.companyname && this.newEmployee.email && this.newEmployee.phone) {
      this.employeeAdded.emit(this.newEmployee);
      this.newEmployee = { name: '', username: '', companyname: '', email: '', phone: '' };
    }
    
  }
}