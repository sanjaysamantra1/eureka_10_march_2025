import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  myName: string = 'viRaT koHLi';
  mySal: number = 5000;
  today: Date = new Date();
  user = { name: 'virat', age: 40, add: 'mumbai' }
  arr = [10, 20, 30, 40, 50, 60, 70]
}
