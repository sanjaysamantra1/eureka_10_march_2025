import { CommonModule } from '@angular/common';
 import { Component } from '@angular/core';
 import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
 
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
   registrationForm: any = {};
 
   constructor(private formBuilder: FormBuilder) {
     this.usingFormGroup();
     this.usingFormBuilder();
   }
 
   usingFormGroup() {
     this.registrationForm = new FormGroup({
       firstName: new FormControl('Sachin', [Validators.required, Validators.minLength(5)]),
       lastName: new FormControl('Tendulkar'),
       email: new FormControl(),
       address: new FormGroup({
         city: new FormControl(),
         state: new FormControl(),
         pincode: new FormControl()
       })
     });
   }
 
   usingFormBuilder() {
     this.registrationForm = this.formBuilder.group({
       firstName: ['Sachin', [Validators.required, Validators.minLength(5)]],
       lastName: ['Tendulkar', [Validators.required, Validators.minLength(5)]],
       email: [],
       address: this.formBuilder.group({
         city: [],
         state: [],
         pincode: []
       })
     });
   }
 
   submitMyForm(formData: any) {
     console.log(this.registrationForm)
     console.log(formData)
   }
 }
