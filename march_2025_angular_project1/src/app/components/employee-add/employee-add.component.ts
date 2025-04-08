import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
  @Output() employeeAdded = new EventEmitter<any>();

  newEmployee = {
    id:'',
    name: '',
    gender: '',
    age: null,
    position: ''
  };

  addingEmployee() {
    if (this.newEmployee.name  && this.newEmployee.name && this.newEmployee.age && this.newEmployee.position) {
      this.employeeAdded.emit(this.newEmployee);
      this.newEmployee = {id:'', name: '', gender: '', age: null, position: '' }; // Reset form

    }
  }
}
