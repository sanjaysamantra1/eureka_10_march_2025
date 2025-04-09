
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeFilterPipe } from '../../assignment-pipe.pipe';
import { RemainingPipe } from '../../../../pipes/remaining.pipe';
import { OrdinalPipe } from '../../assignment2-pipe.pipe';
import { RomanPipe } from '../../assignment3-pipe.pipe';
import { SalutationPipe } from '../../assignment4-pipe.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    // RemainingPipe,
    OrdinalPipe,
    SalutationPipe,
    EmployeeFilterPipe,
    RomanPipe
],
  templateUrl: './assignment-31.component.html',
  styleUrls: ['./assignment-31.component.css'],
  standalone: true
})
export class PipesComponent {
  numberValue: number = 1; 
  name: string = '';  
  gender: string = '';
  mySal: number = 5000;
  today: Date = new Date();
  user = { name: 'virat', age: 40, add: 'mumbai' }
  arr = [10, 20, 30, 40, 50, 60, 70];
  textValue: string = '';

    number: number = 1;
    numbers: number[] = [1, 2, 3, 4, 21, 22, 23, 24, 100];

  msg: string = 'Hello';
  msg2: string = 'Hello';

  numArr:number[] = [20,50,40,10,30]

  numbersToConvert: number[] = [4, 8, 9, 12, 19, 23, 1999];

  employees = [
    { name: 'John Doe', gender: 'Male', salary: 50000 },
    { name: 'Jane Smith', gender: 'Female', salary: 60000 },
    { name: 'Peter Jones', gender: 'Male', salary: 55000 },
    { name: 'Alice Brown', gender: 'Female', salary: 65000 },
  ];


  employeesData = [ // Changed to employeesData
    { name: 'John Doe', department: 'Sales', salary: 50000 },
    { name: 'Jane Smith', department: 'Marketing', salary: 60000 },
    { name: 'Peter Jones', department: 'Sales', salary: 55000 },
    { name: 'Alice Brown', department: 'Engineering', salary: 65000 },
    { name: 'Michael Davis', department: 'Marketing', salary: 70000},
    { name: 'Sarah Wilson', department: 'Engineering', salary: 75000}
  ];

  searchText: string = '';


}