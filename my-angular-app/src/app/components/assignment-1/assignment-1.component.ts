import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment-1.component.html',
  imports:[FormsModule,CommonModule ]
})
export class Assignment1Component {
  isParagraphVisible: boolean = true;

  textInput: string = '';
  wordsLimit: number = 100;

  states: string[] = ['California', 'Texas', 'New York', 'Florida', 'Illinois'];
  selectedState: string = '';

  num1!: number;
  num2!: number;
  operation: string = '+';
  result!: number;

  inputType: string = 'text';
  inputValue: string = '';

  counter: number = 0;

  theme: string = 'light';

  onButtonClick(): void {
    this.isParagraphVisible = !this.isParagraphVisible;
  }

  textAreaWithLimit(): void {
    if (this.textInput.length > this.wordsLimit) {
      this.textInput = this.textInput.substring(0, this.wordsLimit);
    }
  }

  onStateChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedState = target.value;
  }

  performOperation(): void {
    if (this.num1 === undefined || this.num2 === undefined) {
      alert('Please enter valid numbers.');
      return;
    }

    switch (this.operation) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num2 !== 0 ? this.num1 / this.num2 : NaN;
        break;
      default:
        this.result = NaN;
    }
  }

  toggleInputType(): void {
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 0;
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme');
  }
}