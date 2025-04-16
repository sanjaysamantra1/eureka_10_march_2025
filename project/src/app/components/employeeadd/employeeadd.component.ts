import { Component, EventEmitter, Output } from '@angular/core';
import Snackbar from 'awesome-snackbar';
import { EMPLOYEE_MESSAGE } from './constant';


@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent {
  @Output() addEmployee = new EventEmitter<any>();

  
  save(id: string, name: string, userName: string, email: string, address_street: string, address_suite: string) {
    const newEmployee = {
      id: id,
      name: name,
      username: userName,
      email: email,
      address: {
        street: address_street,
        suite: address_suite
      }
    };

    // Emit the new employee data to the parent component
    this.addEmployee.emit(newEmployee);
    new Snackbar(EMPLOYEE_MESSAGE);
  }
}
