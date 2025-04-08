import { Component } from '@angular/core';

import { EmployeeTableComponent } from "../employee-table/employee-table.component";
import { EmployeeAddComponent } from "../employee-add/employee-add.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-employee-crudparent',
  imports: [EmployeeTableComponent, EmployeeAddComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl:'./employee-crudparent.component.html',
  styleUrl: './employee-crudparent.component.css'
})
export class EmployeeCRUDParentComponent {

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

 


  addEmployee(newEmployee: any) {
    this.employees.push(newEmployee);
  }

  DeleteEmployee(num:number){
     Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
    let index=this.employees.findIndex(a=>a.eId==num);
    this.employees.splice(index,1);
            }
            });


  }

   

  
  
}
