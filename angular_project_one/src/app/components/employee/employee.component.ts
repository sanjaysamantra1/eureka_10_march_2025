import { Component } from '@angular/core';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import employees from './employee_list';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';


@Component({
  selector: 'app-employee',
  imports: [
    EmployeeTableComponent,
    EmployeeAddComponent
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  Employees_list = employees;
  receiveDataFromTable(employees:any){
    this.Employees_list = this.Employees_list.filter(emp=>emp.id != employees.id)
    Swal.fire('warning!', 'Employee deleted Successfully!', 'success');
  }

  receiveDataFromAdd(addedEmp:any){
    this.Employees_list.push({id:Number(addedEmp[0]),firstName:String(addedEmp[1]),lastName:String(addedEmp[2]),department:String(addedEmp[3]),salary:Number(addedEmp[4]),hireDate:String(addedEmp[5])})
  }
  // new Snackbar("Employee Added successfully",
  //       { position: 'top-right', theme: 'dark', timeout: 5000, actionText: 'X' }
  //     );
  
}
