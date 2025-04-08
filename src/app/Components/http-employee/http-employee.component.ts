import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpEmployeeService } from '../../Services/http-employee.service';
import { EmployeeAddComponent } from "../employee-add/employee-add.component";
import { HttpEmployeeAddComponent } from "../http-employee-add/http-employee-add.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { Error } from '../constants/message';

@Component({
  selector: 'app-http-employee',
  imports: [HttpEmployeeAddComponent,
   FormsModule,
   FontAwesomeModule
  ],
  templateUrl: './http-employee.component.html',
  styleUrl: './http-employee.component.css'
})
export class HttpEmployeeComponent {

 isLoading:boolean=false;
  employees: any;
  faTrash=faTrash;
  faEdit=faEdit;


  

  constructor(private HttpEmployeeService:HttpEmployeeService) {
    //this.fetchUserData_angular();
  }
//  ngDoCheck(){
//   this.isLoading=false;
  
//  }
 ngOnInit(){
  this.fetchUserData_angular();
 }


 
  fetchUserData_angular() {
   
   // console.log(this.isLoading);
    this.isLoading=true;
   setTimeout(() => {
      this.employees=this.HttpEmployeeService.fetchUserData_angular();
      this.isLoading=false;
     },1000);
  }
  addEmployee(newEmployee:any){
    let existingEmployee = this.employees.find((emp:any) => emp.id == newEmployee.id);
        if (existingEmployee) {
          Swal.fire({
            title: "Existing ID",
            text: "Employee Id Already exists",
             icon: "warning"
          })
          return;
        }
    this.employees=this.HttpEmployeeService.addEmployee(newEmployee);
  }
  deleteUser(num:string){

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
          this.employees=this.HttpEmployeeService.deleteEmployee(num);
          //new Snackbar(DELETE_CONFIRMATION, { position: 'bottom-Right' });
        }
      });
  }


Name1: string = '';
usern1: string = '';
email1: string = '';
currentEditId: string = ''; 

viewdetails(name: string, username: string, email: string, id: string) {
  this.Name1 = name;
  this.usern1 = username;
  this.email1 = email;
  this.currentEditId = id; 
}
    
    updateUser() {

      let updatedUser={
        id: this.currentEditId,
        name: this.Name1,
        username: this.usern1,
        email: this.email1
      };
      this.HttpEmployeeService.editEmployee(this.currentEditId,updatedUser);  
    }
    
  
  

}
