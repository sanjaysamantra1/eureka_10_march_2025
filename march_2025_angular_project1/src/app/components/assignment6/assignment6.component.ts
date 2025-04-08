import { FormsModule } from '@angular/forms';
import { EmployeeService } from './../../services/employee.service';
import { Assignment1Component } from './../assignment1/assignment1.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment6',
  imports: [FormsModule],
  templateUrl: './assignment6.component.html',
  styleUrl: './assignment6.component.css'
})
export class Assignment6Component {

  selectedOption : string = '---Select---';
  entairEmployees : any;
  employeesByGender :any;
  constructor(private employeeService: EmployeeService)
  {
    this.entairEmployees = this.employeeService.employees;
  }


  getDetails()
  {
      if(this.selectedOption == 'All Employees' ||  this.selectedOption == '---Select---')
      {
        this.entairEmployees = this.employeeService.getAllEmployees();
      }
      else if(this.selectedOption == 'M' || this.selectedOption == 'F')
      {
        this.entairEmployees = this.employeeService.getEmployeesByGender(this.selectedOption);
        console.log(this.entairEmployees);
      }
  }
}
 