import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multi-function',
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './multi-function.component.html',
  styleUrl: './multi-function.component.css'
})
export class MultiFunctionComponent {

    isVisible = true;
    buttonText = 'Hide Paragraph';
    chooseGen = true;
    Gender = 'Male';
    userInput = '';
    remainingChars = 100;

    states = ['Andhra', 'Telangana', 'Gujarat', 'U.P', 'Bihar', 'TamilNadu', 'Jammu'];
    selectedState = '';

    selectedOperation: string = '+';
    number1: number = 0;
    number2: number = 0;
    result: number | null = null; 

    passwordValue: string = '';
    showPassword: boolean = false;

    count: number = 0;

    isDarkTheme = false;



    

    toggleVisiblity(){
      this.isVisible = !this.isVisible;
      this.buttonText = this.isVisible ? 'Hide Paragraph' : 'Show Paragraph';
    }

    chooseGender(){
      this.chooseGen = !this.chooseGen
      this.Gender = this.chooseGen? 'Male' : 'Female';


    }

    updateRemaining(){
      this.remainingChars = 100 - this.userInput.length;
    }
    

    calculate() {
      switch (this.selectedOperation) {
        case '+':
          this.result = this.number1 + this.number2;
          break;
        case '-':
          this.result = this.number1 - this.number2;
          break;
        case '*':
          this.result = this.number1 * this.number2;
          break;
        case '/':
          this.result = this.number1 / this.number2;
          break;
        default:
          this.result = null;
      }
    }

    togglePassword() {
      this.showPassword = !this.showPassword;
    }

    counterIncrement(){
      this.count++;

    }
    counterDecrement(){
      this.count--;
    }
    counterReset(){
      this.count = 0;
    }

    

}
