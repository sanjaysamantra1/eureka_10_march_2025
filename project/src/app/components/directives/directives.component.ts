import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberonlyDirective } from '../../directives/numberonly.directive';

@Component({
  selector: 'app-directives',
  imports: [CommonModule,FormsModule,
    NumberonlyDirective
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  age:number=15;
  dayNum:number = new Date().getDay();
  num: number = 5;
  isActive:boolean = true;

  statesArr=["Andhra Pradesh", "Arunachal Pradesh","Assam","Bihar","Goa","Telangana","Karnataka"];
  selectedState:String ='';

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
