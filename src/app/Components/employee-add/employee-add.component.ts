import { Component,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  outputs:  ['addEvent']  
})
export class EmployeeAddComponent {

  newEmployee = { eId:'', name: '', sal: '  ', gender: '' };

  addEvent = new EventEmitter();
  addEmployee() {
    this.addEvent.emit(this.newEmployee);
    this.newEmployee = { eId:'', name: '', sal: '  ', gender: '' };

    
  }
}
