import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { FormsModule } from '@angular/forms';
import { AgePipe } from '../../pipes/age.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-pipe-assignment-03-31-2025',
  imports: [CommonModule,
    OrdinalPipe,
    FormsModule,
    AgePipe,
    RomanPipe,
    SalutationPipe,
    FilterPipe],

  templateUrl: './pipe-assignment-03-31-2025.component.html',
  styleUrl: './pipe-assignment-03-31-2025.component.css'
})

export class PipeAssignment03312025Component {

  num: number = 0;//OrdinalPipe

  dob: any;//age

  numbersToConvert: any;//roman number

  employees: any = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" }
  ];

  searchInput: string = '';//searching employee and added salutation

}
