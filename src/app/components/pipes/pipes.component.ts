import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RomanPipe } from '../../roman.pipe';  
import { OrdinalPipe } from '../../ordinal.pipe';
import { AgePipe } from '../../age.pipe';
import { SalutationPipe } from '../../salutation.pipe';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, FormsModule, RomanPipe, OrdinalPipe, AgePipe,
     SalutationPipe,
    FilterPipe ],  
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  inputNumber!: number;
  roman!: number;
  dateOfBirth: string = '';
  employees = [
    { id: 1, name: 'John Doe', gender: 'male', position: 'Developer' },
    { id: 2, name: 'Jane Smith', gender: 'female', position: 'Designer' },
    { id: 3, name: 'Alex Wong', gender: 'male', position: 'Manager' }
  ];
  searchText: string = ''; 
}
