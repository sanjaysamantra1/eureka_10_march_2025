import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  flag: boolean = true;

  msg: string = '';
  
  selectedCourse: string = '';

  selectedOperation: string = '';

  operation(n1: any, n2: any, operator: string) {
    switch(operator) {
      case '+':
      return +n1 + +n2;
      case "-":
      return +n1 - +n2;
      case "*":
      return +n1 * +n2;
      case "/":
      return +n1 / +n2;
    }
    return null;
  }

  flip: boolean = false;
  text : string = 'text';

  clickEvent() {
    this.flip = !this.flip;
    console.log(this.flip);
    this.flip ? this.text= "password" : this.text = "text";
  }

  count:number = 0;

  toggleTheme() {
    this.flag = !this.flag;
    if (this.flag) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

}
