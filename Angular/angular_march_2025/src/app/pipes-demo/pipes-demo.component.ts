import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../pipes/ordinal.pipe';
import { RomanPipe } from '../pipes/roman.pipe';
import { AgePipe } from '../pipes/age.pipe';
import { SalutationPipe } from '../pipes/salutation.pipe';
import { EmployeeFilterPipe } from '../pipes/employee-filter.pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,
    FormsModule,
    OrdinalPipe,
    RomanPipe,
    AgePipe,
    SalutationPipe,
    EmployeeFilterPipe
  ],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})

export class PipesDemoComponent {
  // For ordinal pipe
  numbers = [1, 2, 3, 4, 11, 12, 13, 21, 22, 23, 24, 31, 32, 33];

  // For roman pipe
  romanNumbers = [1, 4, 5, 8, 9, 10, 14, 19, 20, 49, 50, 99, 100, 499, 500, 999, 1000];

  // For age pipe
  birthDates = ['04-06-2020', '1990-05-15', '2000-01-01', '2015-12-31', '1997-03-16'];

  // For salutation & filter pipes
  employees = [
    { id: 1, name: 'John Doe', gender: 'male', position: 'Developer', department: 'IT' },
    { id: 2, name: 'Jane Smith', gender: 'female', position: 'Manager', department: 'HR' },
    { id: 3, name: 'Robert Johnson', gender: 'male', position: 'Designer', department: 'Creative' },
    { id: 4, name: 'Emily Davis', gender: 'female', position: 'Tester', department: 'QA' }
  ];

  searchText = '';
}