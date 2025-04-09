import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  standalone: true,
  imports: [FormsModule] 
})
export class EmployeeComponent {
  employees: any[] = [];
  selectedType: string = 'all';  

  constructor(private empService: EmployeeService) {}

  filterEmployees() {
    if (this.selectedType === 'all') {
      this.employees = this.empService.getAllEmployees();
    } else if (this.selectedType === 'male') {
      this.employees = this.empService.getMaleEmployees();
    } else if (this.selectedType === 'female') {
      this.employees = this.empService.getFemaleEmployees();
    }
  }
}

