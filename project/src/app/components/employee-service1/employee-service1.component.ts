import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-service1',
  imports:[FormsModule,CommonModule],
  templateUrl: './employee-service1.component.html', 
  styleUrls: ['./employee-service1.component.css']
})
export class EmployeeService1Component {
    employees: any[] = [];
    selected: string = 'allEmployees';

    constructor(private employeeService: EmployeeServiceService) {}

    ngOnInit(): void {
      this.filteredEmployees();
    }

    filteredEmployees(): void {
      if (this.selected === 'allEmployees') {
        this.employees = this.employeeService.getallEmployees();
      } else if (this.selected === 'Female') {
        this.employees = this.employeeService.getAllFemaleEmployees();
      } else if (this.selected === 'Male') {
        this.employees = this.employeeService.getAllMaleEmployees();
      }
    }
}
