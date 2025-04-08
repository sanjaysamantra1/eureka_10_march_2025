import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class DataBindingComponent {
  myName: string = 'Sachin Tendulkar';
  img_url: string = 'https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png'
  flag: boolean = false;
  colspanNumber: number = 2;
  msg: string = '';
  selectedState: string = '';
  count: number = 0;

  num1: number = 0;
  num2: number = 0;
  op: string = '';
  result: number = 0;

  calculate() {
    switch (this.op) {
      case '+': this.result = this.num1 + this.num2; break;
      case '-': this.result = this.num1 - this.num2; break;
      case '*': this.result = this.num1 * this.num2; break;
      case '/': this.result = this.num1 / this.num2; break;
    }
  }

  addToCart() {
    alert('Your Item is added to cart!!!')
  }

  toggleTheme() {
    this.flag = !this.flag;
    if (this.flag) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  additionResult: number = 0;
  calculateOnDemand(num3: HTMLInputElement, num4: HTMLInputElement) {
    console.log(num3, num3.classList, num3.id, num3.type);
    this.additionResult = +num3.value + +num4.value;
  }

}
