import { Component } from '@angular/core';
import { EmployeeViewDeleteComponent } from "../employee-view-delete/employee-view-delete.component";
import { EmployeeAddComponent } from "../employee-add/employee-add.component";
import employees from './employee';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-employee-parent',
  templateUrl: './employee-parent.component.html',
  styleUrls: ['./employee-parent.component.css'],
  imports: [EmployeeViewDeleteComponent, EmployeeAddComponent],
  standalone: true
})
export class EmployeeParentComponent {
employees = employees;

  addEmployee(employee: any) {
    const newId = this.employees.length ? this.employees[this.employees.length - 1].eId + 1 : 1;
    this.employees.push({ eId: newId, ...employee, company: { name: employee.companyname } });
    this.openAlert();
  }

  deleteEmployee(eId: number) {
    this.employees = this.employees.filter(emp => emp.eId !== eId);
    this.openSnack();
  }
   openAlert(){
      Swal.fire('Congratulations!','Employee added successfully','success');
    }
      openSnack(){
            new Snackbar('Employee deleted successfully',
              { position: 'bottom-left', theme: 'light', timeout: 5000, actionText: 'X' }
            );
          }
}