// form.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',  
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './form.component.html', 
  styleUrls: ['./form.component.css']   
})
export class FormComponent { 
  dataOnMyForm(values: any) {
    console.log(values);
  }
}