import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-assignment',
  imports: [  FormsModule,
    CommonModule],
  templateUrl: './form-assignment.component.html',
  styleUrl: './form-assignment.component.css'
})
export class FormAssignmentComponent {
  submitMyForm(formValue: any) {
    console.log(formValue)
  }
}
    