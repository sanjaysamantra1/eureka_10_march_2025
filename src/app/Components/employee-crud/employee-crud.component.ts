import { Component } from '@angular/core';
import employeeArr from './employee_data'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Snackbar from 'awesome-snackbar'
import { DELETE_CONFIRMATION, SUCCESS_MESSAGE,Error } from '../constants/message';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee-crud',
  imports: [
    FormsModule,
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {
  faDeleteLeft =faDeleteLeft ;
  faEye=faEye;
  
  // delete() {
  //   this.employees = this.employees.filter(p => p.name !== this.empdelete);
  // }


employees = employeeArr;
emp_delete:String="";
Emp_id:number=0;
Emp_Name:string="";
EmpUser_Name:string="";
Emp_Email:string="";
Name1:String="";
usern1:String="";
email1:String="";

  AddEmp(){
    let existingEmployee = this.employees.find(emp => emp.id === this.Emp_id);
    if (existingEmployee) {
      new Snackbar(Error, { position: 'bottom-right' });
      return;
    }

    let newEmployee = {
      id: this.Emp_id,
      name: this.Emp_Name,
      username: this.EmpUser_Name,
      email: this.Emp_Email
    };
    
   
    this.employees.push(newEmployee);
    new Snackbar(SUCCESS_MESSAGE, { position: 'bottom-right' }); 

  }


  delete(name: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(p => p.name !== name);
        //new Snackbar(DELETE_CONFIRMATION, { position: 'bottom-Right' });
        Swal.fire("Deleted!", "The employee has been removed.", "success");
      }
    });
  }
 

  // delete() {
    
  //       this.employees = this.employees.filter(p => p.name !== this.emp_delete);  
  //       new Snackbar(DELETE_CONFIRMATION, { position: 'bottom-right' });
  // }
  
  
  viewdetails(name:string,usern:String,email:String){

    this.Name1=name;
    this.usern1=usern;
    this.email1=email;


  }
  
  
  // setEmployeeToDelete(name: string) {
    
  //   this.emp_delete = name;
  // }

}
