import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
//import { ZoomoutDirective } from '../../directive/zoomout.directive';
import { HttpClient } from '@angular/common/http';
import { ZoomoutDirective } from '../../directives/zoomout.directive';
@Component({
  selector: 'app-employee-crud',
  imports: [ZoomoutDirective],
  standalone: true,
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {

  employees = [
    { id: 1, name: 'John', dept: 'IT', salary: 40000 },
    { id: 2, name: 'Sara', dept: 'HR', salary: 35000 },
    { id: 3, name: 'Raj', dept: 'Finance', salary: 50000 }
  ];

  selectedEmp: any = null;

  deleteEmp(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This employee will be removed!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(emp => emp.id !== id);
        Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
      }
    });
  }

  viewEmp(emp: any) {
    this.selectedEmp = emp;
  }

  addEmp(name: string, dept: string, salary: string) {
    const newEmp = {
      id: this.employees.length + 1,
      name,
      dept,
      salary: Number(salary)
    };
    this.employees.push(newEmp);
    new Snackbar('Employee Added Successfully', {
      position: 'top-center',
      theme: 'light',
      timeout: 3000
    });
  }
}
