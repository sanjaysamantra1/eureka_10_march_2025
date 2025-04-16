import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-assign',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './form-assign.component.html',
  styleUrl: './form-assign.component.css'
})
export class FormAssignComponent {
  submitMyForm(formData: any): void {
    console.log('Form Submitted:', formData);
    alert('Form submitted successfully!\n\n' + JSON.stringify(formData, null, 2));
  }

}
