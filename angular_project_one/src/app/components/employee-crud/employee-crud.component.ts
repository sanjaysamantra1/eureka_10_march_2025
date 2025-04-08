import { Component } from '@angular/core';
import employees from './employee_list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'awesome-snackbar'
import addMsg from '../../constants';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-crud',
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {

  employeesArr = employees;
  trash = faTrash
  view = faEye
  snackbar_msg = addMsg;
  searchedEmp: any;

  removeEmp(id: number){
    this.employeesArr = this.employeesArr.filter(emp => emp.id !== id);
    Swal.fire('warning!', 'Employee deleted Successfully!', 'success');
  }
  addEmployee(){
    const id = prompt("enter a employee Id")
    const firstName = prompt("enter a employee First Name")
    const lastName = prompt("enter a employee Last Name")
    const department = prompt("enter a employee Department")
    const salary = prompt("enter a employee Salary")
    const hireDate = prompt("enter a employee Hiring Date")
    const newEmp = {id:Number(id),firstName:String(firstName),lastName:String(lastName),department:String(department),salary:Number(salary),hireDate:String(hireDate)}

    this.employeesArr.push(newEmp)
    new Snackbar(this.snackbar_msg,
      { position: 'top-right', theme: 'dark', timeout: 5000, actionText: 'X' }
    );
  }
}
