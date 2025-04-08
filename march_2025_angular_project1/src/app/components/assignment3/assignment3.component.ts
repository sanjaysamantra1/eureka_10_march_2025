import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
//import { employee_Added_msg } from '../../constants/message_constants';
import * as data from './users.json';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import { Assignment4PipesComponent } from '../assignment4-pipes/assignment4-pipes.component';
import { FormsModule } from '@angular/forms';
//import { faStar } from '@fortawesome/free-regu

//import userData from './users';
@Component({
  selector: 'app-assignment3',
  imports: [FontAwesomeModule,Assignment4PipesComponent,FormsModule],
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css'
})
export class Assignment3Component {
users = (data as any).default;
snackbar_msg = '';
faStar = faStar;
faTrash = faTrash;
faEdit = faEdit;
editEmployee=true;

newEmployee = {
  id: '',
  name: '',
  username: '',
  email: '',
  phone: '',
  address: {
            city: ''
  }
};


openAlert()
{
  Swal.fire("Good Job","Emp added","success");
}
  openSnackBar()
  {
    new Snackbar(this.snackbar_msg);
  }

  deleteUser(userId: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "error",  // Makes the popup red
      showCancelButton: true,
      confirmButtonColor: "#d33",  // Red confirm button
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter((user: { id: number; }) => user.id !== userId);
  
        // Reassign IDs sequentially
        this.users.forEach((user: { id: any; }, index: number) => {
          user.id = index + 1;
        });
  
        Swal.fire({
          title: "Deleted!",
          text: "The employee has been removed.",
          icon: "success",
          confirmButtonColor: "#3085d6"
        });
      }
    });
}

addEmp()
{
  this.users.push(this.newEmployee);
  if(this.newEmployee.address && this.newEmployee.email &&this.newEmployee.id && this.newEmployee.name
    && this.newEmployee.phone && this.newEmployee.username
    && this.newEmployee.address.city
  )
  {


  if(this.editEmployee==true)
    {
      this.editEmployee = false;
    }
    else
    {
      this.editEmployee = true;
    }
    this.newEmployee = {
      id: '',
      name: '',
      username: '',
      email: '',
      phone: '',
      address: {
                city: ''
      }
    };
  }
  else
  {
    Swal.fire({
      title: "Caution!",
      text: "Please fill the form completly!",
      icon: "error",
      confirmButtonColor: "#3085d6"
    });
  }
}

display()
{
  if(this.editEmployee==true)
  {
    this.editEmployee = false;
  }
  else
  {
    this.editEmployee = true;
  }
}

}

