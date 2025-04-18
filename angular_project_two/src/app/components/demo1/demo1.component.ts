import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
    add(a:number, b:number){
      return a+b;
    }

    sub(a:number, b:number){
      return a-b;
    }

    mul(a:number, b:number){
      return a*b;
    }

    isEven(n:number){
      return n%2==0;
    }

    sumOfDigits(n:number){
      let rem, sum = 0;
      while(n !=0){
        rem = n % 10;
        sum = sum + rem;
        n = n /10;
      }
      return sum;
    }
}
