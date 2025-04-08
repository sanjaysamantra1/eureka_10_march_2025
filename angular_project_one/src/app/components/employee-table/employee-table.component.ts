import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs : ["Employees_list"],
  outputs : ["nameEvent"],
  standalone:true
})
export class EmployeeTableComponent {
  Employees_list: any;

  nameEvent = new EventEmitter
  sharingEmployee(employee:any){
    this.nameEvent.emit(employee)
  }
  
}
