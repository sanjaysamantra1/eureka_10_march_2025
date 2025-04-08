import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  check: boolean = false;
  hiddenPara(){
    return this.check = !this.check
  }
  
  
   maxLength: number = 100;
   inpValue: String = '';
  remainingChars(): number {
    const rem = (this.maxLength - this.inpValue.length);
    return rem
    //  return this.rem-this.inpValue.length
  }
  States: string = ''

  num1: number = 0
  num2: number = 0
  operator: string = ''
  result: number = 0

  performOperation(): number{
    switch(this.operator){
      case("+"):
      this.result = this.num1+this.num2;
      break;
      case("-"):
      this.result = this.num1-this.num2;
      break;
      case("*"):
      this.result = this.num1*this.num2;
      break;
      case("/"):
      this.result = this.num1/this.num2;
      break;
    }
    return this.result
  }

  toggle: boolean = false;

  count: number = 0;

  changeBG: boolean = false;

  toggleTheme(){
    this.changeBG = !this.changeBG;
    if(this.changeBG){
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
    }
  }

}
