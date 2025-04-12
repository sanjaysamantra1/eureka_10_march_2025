import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true, // Add this if you're using standalone components
  imports: [CommonModule, FormsModule], // Add these imports
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees: any[] = [];
  selectedFilter: string = 'allEmployees';

  constructor(private employeeService: EmployeeService) {
    this.filterEmployees();
  }

  filterEmployees() {
    switch(this.selectedFilter) {
      case 'allEmployees':
        this.employees = this.employeeService.getAllEmployees();
        break;
      case 'maleEmployees':
        this.employees = this.employeeService.getMaleEmployees();
        break;
      case 'femaleEmployees':
        this.employees = this.employeeService.getFemaleEmployees();
        break;
    }
  }
}