import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import employees from './employees';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar'


@Component({
  standalone: true,
  selector: 'app-employee',
  imports: [FormsModule, CommonModule],
  templateUrl: './assignment-march28.component.html',
  styleUrl: './assignment-march28.component.css'
})
export class AssignmentMarch28Component {
  employees = employees; 
  newEmployee = { name: '', username: '', companyname: '',phone: '',email: '' };
  selectedEmployee: any = null;

  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.username && this.newEmployee.companyname && this.newEmployee.phone && this.newEmployee.email) {
      const newId = this.employees.length ? this.employees[this.employees.length - 1].eId + 1 : 1;
      this.employees.push({
        eId: newId,
        name: this.newEmployee.name,
        username: this.newEmployee.username,
        company: {
          name: this.newEmployee.companyname,
          catchPhrase: '',
          bs: ''
        },
        email: this.newEmployee.email, 
        phone: this.newEmployee.phone,  
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: ''
          }
        },
        website: ''
      });
      this.newEmployee = { name: '', username: '', companyname: '', phone: '', email: '' };
         this.openAlert();
    }
  }
  openAlert(){
    Swal.fire('Congratulations!','Employee added successfully','success');
  }

  viewEmployeeDetails(employee: any) {
    this.selectedEmployee = {
      eId: employee.eId,
      name: employee.name,
      phone: employee.phone,
      email: employee.email
    };
  }

  
  deleteEmployee(eId: number) {
    this.employees = this.employees.filter(emp => emp.eId !== eId);
    this.openSnack();
  }

   openSnack(){
        new Snackbar('Employee deleted successfully',
          { position: 'bottom-left', theme: 'light', timeout: 5000, actionText: 'X' }
        );
      }

  trackByEmployee(index: number, employee: any) {
    return employee.eId;
  }
}