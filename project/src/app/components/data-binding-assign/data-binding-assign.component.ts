import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-assign',
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding-assign.component.html',
  styleUrl: './data-binding-assign.component.css'
})
export class DataBindingAssignComponent {
  isParagraphVisible: boolean = true;  // Controls the visibility of the paragraph

  toggleParagraph() {
    console.log('Button clicked!');
    this.isParagraphVisible = !this.isParagraphVisible;  // Toggle visibility on button click
  }


  userInput: string = '';  // Stores the input from the user
  remainingCharacters: number = 100;  // Initially set to max length

  updateRemainingCharacters() {
    this.remainingCharacters = 100 - this.userInput.length;  // Calculate remaining characters
  }

  states: string[] = ['California', 'Kansas', 'Virginia', 'New York'];  // List of states
  selectedState: string = '';  // Stores the selected state

  num1: number = 0;
  num2: number = 0;
  operation: string = ' ';
  result: number = 0;

  ngOnChanges() {
    this.calculateResult();
  }

  calculateResult() {
    switch (this.operation) {
      case '+': this.result = this.num1 + this.num2; break;
      case '-': this.result = this.num1 - this.num2; break;
      case '*': this.result = this.num1 * this.num2; break;
      case '/': this.result = this.num2 !== 0 ? this.num1 / this.num2 : NaN; break;
      default: this.result = 0;
    }
  }


  isPasswordVisible: boolean = false;  // Controls the input type
  userInput1: string = '';  // Stores user input

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;  // Toggle password visibility
  }

  counter: number = 0;  // Stores counter value

  increment() {
    this.counter++;  // Increment counter
  }

  decrement() {
    this.counter--;  // Decrement counter
  }

  reset() {
    this.counter = 0;  // Reset counter to 0
  }


  isDarkTheme: boolean = false;  // Flag to track current theme

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    // Toggle theme between dark and light
    if(this.isDarkTheme){
      document.body.classList.add('dark');
    } else{
      document.body.classList.remove('dark');
    }
  }
}