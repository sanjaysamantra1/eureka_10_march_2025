import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { FormsModule } from '@angular/forms';
import { SalutationPipe } from '../../pipes/salutation.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    OrdinalPipe,
    SearchPipe,
    AgePipe,
    SalutationPipe
    

   
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  
})
export class PipesComponent {

  // myName: string = 'viRaT koHLi';
  // mySal: number = 5000;
  // today: Date = new Date();
  // user = { name: 'virat', age: 40, add: 'mumbai' }
  // arr = [10, 20, 30, 40, 50, 60, 70]


  ordiNum:number=0;
  birthDate:string="";

  searchTerm: string = '';
  employees = [
    { id: 1, name: 'Rohan', gender: 'Male', position: 'Developer' },
    { id: 2, name: 'Ram',  gender: 'Male', position: 'Designer' },
    { id: 3, name: 'chanakya',  gender: 'Male', position: 'Manager' },
    { id: 4, name: 'lady',  gender: 'Female', position: 'Developer' },

    
  ];


}
