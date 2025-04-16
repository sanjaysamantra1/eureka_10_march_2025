import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-forms',
  imports: [ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './model-forms.component.html',
  styleUrl: './model-forms.component.css'
})
export class ModelFormsComponent {
  userForm = new FormGroup({
    firstName : new FormControl,
    address : new FormGroup({
      city: new FormControl,
      state: new FormControl
    })
  });

  submitForm(userForm: any){
    if(this.userForm.valid){
      console.log(this.userForm);
      alert("Form Submitted");
    }
  }


}
