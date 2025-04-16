import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  imports: [CommonModule],
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent {
  @Input() users: any[] = [];
  @Output() removeEmployee = new EventEmitter<number>();

  deleteEmployee(id: number) {
    // Emit the id of the employee to be deleted
    this.removeEmployee.emit(id);
  }
}
