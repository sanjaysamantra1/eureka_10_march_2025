import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
  @Input() employeeData: any[] = [];
  @Output() deleteEmployee = new EventEmitter<number>();

  onDelete(id: number) {
    this.deleteEmployee.emit(id);
  }
}


