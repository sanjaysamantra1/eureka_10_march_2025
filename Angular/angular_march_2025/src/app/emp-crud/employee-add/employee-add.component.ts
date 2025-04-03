import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../models/employee';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-add',
  imports: [
    FormsModule, 
    CommonModule
  ],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
  @Output() addEmployee = new EventEmitter<Omit<Employee, 'id'>>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.addEmployee.emit(form.value);
      form.reset;
    }
  }
}
