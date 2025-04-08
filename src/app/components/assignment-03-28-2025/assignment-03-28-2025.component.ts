import { Component } from '@angular/core';
import userData from '../user-list/users';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';
import { EMPLOYEE_MESSAGE } from './constant';

@Component({
  selector: 'app-assignment-03-28-2025',
  imports: [
    FontAwesomeModule,FormsModule
  ],
  templateUrl: './assignment-03-28-2025.component.html',
  standalone: true,
  styleUrl: './assignment-03-28-2025.component.css'
})
export class Assignment03282025Component {

  users = userData;
  trash = faTrash;
  view = faEye;
  username : string = '';
  email: string='';
  // snackbar_msg = addMsg;

  removeEmp(id: number){
    this.users = this.users.filter(emp => emp.id !== id);
    Swal.fire('Good job!', 'Employee deleted Successfully!', 'success');
  }

  currentUser(user: any){
    this.username = user.name;
    this.email = user.email;
  }

  save(id:string, name:string, userName:string, email:string, address_street:string, address_suite:string){
   let userObject = {
    "id": id,
    "name": name,
    "username": userName,
    "email": email,
    "address": {
    "street": address_street,
    "suite": address_suite
    }
   }
   console.log(userObject);

   this.users.push(userObject as any); 
   new Snackbar(EMPLOYEE_MESSAGE);

  }

}
