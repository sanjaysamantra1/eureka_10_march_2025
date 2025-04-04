import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../services/worker.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [
    FormsModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  filterOptions = [
    { value: 'all', label: 'All Employees' },
    { value: 'male', label: 'Male Employees' },
    { value: 'female', label: 'Female Employees' }
  ];
  selectedFilter = 'all';

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    this.filterEmployees();
  }

  filterEmployees() {
    switch (this.selectedFilter) {
      case 'male':
        this.employees = this.workerService.getMaleEmployees();
        break;
      case 'female':
        this.employees = this.workerService.getFemaleEmployees();
        break;
      default:
        this.employees = this.workerService.getAllEmployees();
    }
  }

  onFilterChange() {
    this.filterEmployees();
  }

}
