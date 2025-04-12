import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  @Output() employeeAdded = new EventEmitter<any>();
  
  newEmployee = {
    name: '',
    position: '',
    department: '',
    salary: 0
  };

  onSubmit() {
    this.employeeAdded.emit({...this.newEmployee});
    this.resetForm();
  }

  private resetForm() {
    this.newEmployee = {
      name: '',
      position: '',
      department: '',
      salary: 0
    };
  }
}