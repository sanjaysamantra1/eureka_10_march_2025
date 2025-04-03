import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {
  @Input() employees: Employee[] = [];
  @Output() deleteEmployee = new EventEmitter<number>();

  onDelete(id: number) {
    this.deleteEmployee.emit(id);
  }
}
