import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-table-assign',
  imports: [CommonModule],
  templateUrl: './card-table-assign.component.html',
  styleUrl: './card-table-assign.component.css'
})
export class CardTableAssignComponent {
  users = [
    { name: 'John Doe', username: 'johndoe', email: 'johndoe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', username: 'janesmith', email: 'janesmith@example.com', phone: '234-567-8901' },
    { name: 'Mike Johnson', username: 'mikej', email: 'mikej@example.com', phone: '345-678-9012' },
    { name: 'Emily Davis', username: 'emilyd', email: 'emilyd@example.com', phone: '456-789-0123' }
  ];

  showTableView: boolean = true; // Toggle between table and card view

  // Toggle between table and card view
  toggleView(): void {
    this.showTableView = !this.showTableView;
  }

}
