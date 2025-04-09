import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html'
})
export class EmployeeTableComponent {
  @Input() employees: any[] = [];
  @Output() delete = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }
}
