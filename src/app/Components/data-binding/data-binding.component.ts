import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  myName: string = '';
  toggleVisibility() {
    this.myName = this.myName == '' ? 'Sachin tendulkar' : '';
    
    // if (this.isVisible) {
    //   this.myName = 'Sachin Tendulkar';
    // } else {
    //   this.myName = '';
    // }
  }

  state:string='';

  textValue: string = '';



  num1: number = 0;
  num2: number = 0;
  operation: string = '+';
  performOperation(){
    if(this.operation=='+'){
       return this.num1+this.num2;
    } 
    else if(this.operation=='-'){
       return this.num1-this.num2;
    }
    else if(this.operation=='*'){
       return this.num1*this.num2;
      } 
      else{
      return this.num1/this.num2;
    }
  }

  counter: number = 0;
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  reset(){
    this.counter = 0;
  }

  inputType: string = 'text';
  inputValue: string = '';
  toggleInputType() {
    this.inputType = this.inputType == 'text' ? 'password' : 'text';
  }

  theme: string = 'light';

  toggleTheme() {
   if(this.theme=='light'){
    this.theme = 'dark';

    document.body.classList.add('dark');

   }
   else{
    this.theme = 'light';
    document.body.classList.remove('dark');
    }
  }

 

}


