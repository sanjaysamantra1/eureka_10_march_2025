import { Component,EventEmitter  } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs:['emp'],
  outputs: ['nameEvent']
})
export class EmployeeTableComponent {

  emp:any;

  nameEvent = new EventEmitter();
  sendDataToParent(emp1:any) {
    this.nameEvent.emit(emp1);
  }

}
