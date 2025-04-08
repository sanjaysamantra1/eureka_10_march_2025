import { Component } from '@angular/core';
import { PipesComponent } from '../pipes/pipes.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { FormsModule } from '@angular/forms';
import { MrAndMissPipe } from '../../pipes/mr-and-miss.pipe';
import { SearchPipe } from '../../pipes/search.pipe';


@Component({
  selector: 'app-assignment4-pipes',
  imports: [PipesComponent,OrdinalPipe,FormsModule,
    MrAndMissPipe,SearchPipe
  ],
  templateUrl: './assignment4-pipes.component.html',
  styleUrl: './assignment4-pipes.component.css'
})
export class Assignment4PipesComponent {

  searchText: string = '';

  employees = [
    { name: 'John Doe', gender: 'M', age: 30, position: 'Developer' },
    { name: 'Alice Smith', gender: 'F', age: 28, position: 'Designer' },
    { name: 'Bob Johnson', gender: 'M', age: 35, position: 'Manager' },
    { name: 'Emma Watson', gender: 'F', age: 25, position: 'HR' }
  ];
  romanInput = 2;
  num11 : number = 8;
  transform(value: number): string {
    if (value == null) {
      return '';
    }

    let suffix = 'th';
    const mod100 = value % 100;

    // Special case for 11, 12, 13 (e.g., 11th, 12th, 13th)
    if (mod100 < 11 || mod100 > 13) {
      const mod10 = value % 10;
      switch (mod10) {
        case 1:
          suffix = 'st';
          break;
        case 2:
          suffix = 'nd';
          break;
        case 3:
          suffix = 'rd';
          break;
        default:
          suffix = 'th';
          break;
      }
    }

    return `${value}${suffix}`;
  }

}
