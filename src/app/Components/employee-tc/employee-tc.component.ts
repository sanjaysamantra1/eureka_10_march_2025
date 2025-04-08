import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-tc',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './employee-tc.component.html',
  styleUrl: './employee-tc.component.css'
})
export class EmployeeTCComponent {
  
  filter: string = '';
  employees: any;

  constructor(private employeeService: EmployeeService) {
  }

  getFilteredEmployees() {
    if(this.filter=="allEmployees"){
    this.employees = this.employeeService.getEmployees();
    }
    else if(this.filter=="maleEmployees"){
      this.employees=this.employeeService.MaleEmployees();
    }
    else if(this.filter=="femaleEmployees"){
      this.employees=this.employeeService.FemaleEmployees();
    }
  }

}
