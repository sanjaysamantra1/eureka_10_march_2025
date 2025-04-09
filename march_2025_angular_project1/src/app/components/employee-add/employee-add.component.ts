// employee-add.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  imports: [FormsModule],
  styleUrl: './employee-add.component.css',
  standalone: true
})
export class EmployeeAddComponent {
  emp = { name: '', email: '', sal: null };

  @Output() add = new EventEmitter<any>();
  

  onSubmit() {
    this.add.emit(this.emp);
    this.emp = { name: '', email: '', sal: null }; 
  }
}
