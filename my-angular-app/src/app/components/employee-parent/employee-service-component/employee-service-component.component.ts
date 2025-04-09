import { Component} from '@angular/core';
import { EmployeeServiceService } from '../../../employee-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-service-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-service-component.component.html',
  styleUrl: './employee-service-component.component.css'
})
export class EmployeeServiceComponentComponent{
  employees:any[] = [];
  selectedFilter: string = 'allEmployees';
  constructor(private employeeService: EmployeeServiceService){}
   ngOnInit(): void{
    this.filterEmployees();
   }
   filterEmployees(): void{
    if(this.selectedFilter === 'allEmployees'){
      this.employees = this.employeeService.getAllEmployees();
    } else if(this.selectedFilter ==='maleEmployees'){
      this.employees = this.employeeService.getMaleEmployees();
    }
    else if (this.selectedFilter === 'femaleEmployees') {
      this.employees = this.employeeService.getFemaleEmployees();
    }
   }
   trackByEmployee(index: number, employee: any) {
    return employee.eId;
  }
}


