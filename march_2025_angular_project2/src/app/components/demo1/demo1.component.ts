import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';

@Component({
  selector: 'app-demo1',
  imports: [
    OrdinalPipe,
    FormsModule
  ],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
  cardinal:number = 21;

  add(a: number, b: number) {
    return a + b;
  }
  sub(a: number, b: number) {
    return a - b;
  }
  mul(a: number, b: number) {
    return a * b;
  }
  isEven(n: number) {
    return n % 2 === 0;
  }

  sumofDigits(n: number) { // 125 = 8
    let rem, sum = 0;
    while (n != 0) {
      rem = n % 10;
      sum = sum + rem;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  cars: string[] = ['tata', 'honda'];
  addNewCar(newCar: string) {
    this.cars.push(newCar)
  }
}
