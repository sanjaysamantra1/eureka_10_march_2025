import { Component } from '@angular/core';
import { AgePipe } from '../../pipes/age.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaluationPipe } from '../../pipes/saluation.pipe';
import { EmployeesPipe } from '../../pipes/employees.pipe';

@Component({
  selector: 'app-pipe-assign',
  imports: [CommonModule,
    FormsModule,
    AgePipe,
    OrdinalPipe,
    RomanPipe,
    SaluationPipe,
    EmployeesPipe
  ],
  templateUrl: './pipe-assign.component.html',
  styleUrl: './pipe-assign.component.css',
  standalone: true
})
export class PipeAssignComponent {

  numbersToConvert: number[] = [4,8,9,10,20,30];

  searchTerm: string = '';
  employees = [
    { name: 'John Doe', gender: 'male',position: 'Manager' },
    { name: 'Jane Smith', gender: 'female',position: 'Developer' },
    { name: 'Mike Johnson', gender: 'male',position: 'Designer' },
    { name: 'Emily Davis', gender: 'female', position: 'HR' }
  ];


}
