import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee-table',
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
   inputs:[
    // 'employees'
    'employees'
   ],
   outputs:['deleteEvent']
  

})
export class EmployeeTableComponent {
  employees:any;

  deleteEvent=new EventEmitter();
  

  // deleteEmployee(index:number) {
  //   this.employees.splice(index, 1);
  
      
  // }
//n:number=0;
  deleteEmployee(Id:number){
   // this.n=Id;
    this.deleteEvent.emit(Id);
  }


 



}
