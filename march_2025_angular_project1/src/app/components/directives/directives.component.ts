
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  age: number = 25;
  dayNum: number = new Date().getDay();
  statesArr = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh"]
  selectedState: string = '';
  selectedState2: string = '';
  num: number = 2;
  isActive:boolean = true;

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
  ]
  updateEmployees() {
    this.employees = [
      { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
      { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
      { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
      { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
      { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
    ]
  }
} 
