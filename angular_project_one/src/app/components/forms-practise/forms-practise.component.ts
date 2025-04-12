import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-practise',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './forms-practise.component.html',
  styleUrl: './forms-practise.component.css'
})
export class FormsPractiseComponent {

  dataOnMyForm(values:any){
    console.log(values);
  }
}
