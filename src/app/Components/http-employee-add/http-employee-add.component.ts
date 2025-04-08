import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-employee-add',
  imports: [FormsModule],
  templateUrl: './http-employee-add.component.html',
  styleUrl: './http-employee-add.component.css',
  outputs:  ['addEvent'] 
})
export class HttpEmployeeAddComponent {


  newEmployee = { id:"", name: "", username: "", email: "" };

  addEvent = new EventEmitter();
  addEmployee() {
    this.addEvent.emit(this.newEmployee);
    this.newEmployee = { id:"", name: "", username: "", email: "" };  
  }

}
