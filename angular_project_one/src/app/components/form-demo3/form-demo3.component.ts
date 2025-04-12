import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo3',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form-demo3.component.html',
  styleUrl: './form-demo3.component.css'
})
export class FormDemo3Component {

  registerForm: any =[]
  constructor(){
    this.registerForm = new FormGroup({
      firstName: new FormControl(),
      middleName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        line1: new FormControl(),
        line2: new FormControl(),
        city: new FormControl()
      })
    })
  }


}
