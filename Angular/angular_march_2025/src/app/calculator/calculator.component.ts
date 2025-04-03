import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Error: Can't bind to 'ngModel' since it isn't a known property of 'input'.
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1 = 0;
  num2 = 0;
  operator = '+';
  result = 0;

  calculate() {
    switch(this.operator) {
      case '+': this.result = this.num1 + this.num2; break;
      case '-': this.result = this.num1 - this.num2; break;
      case '*': this.result = this.num1 * this.num2; break;
      case '/': this.result = this.num1 / this.num2; break;
    }
  }
}
