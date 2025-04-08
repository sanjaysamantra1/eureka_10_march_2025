import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { MySortPipe } from '../../pipes/my-sort.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    MySortPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  standalone: true
})
export class PipesComponent {
  myName: string = 'viRaT koHLi';
  mySal: number = 5000;
  today: Date = new Date();
  user = { name: 'virat', age: 40, add: 'mumbai' }
  arr = [10, 20, 30, 40, 50, 60, 70];

  msg: string = 'Hello';
  msg2: string = 'Hello';

  numArr:number[] = [20,50,40,10,30]
}
