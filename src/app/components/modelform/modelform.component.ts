import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  imports: [
    ReactiveFormsModule,CommonModule

  ],
  templateUrl: './modelform.component.html',
  styleUrl: './modelform.component.css'
})
export class ModelformComponent {

  registerForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      pincode: new FormControl()
    })
  });

}
