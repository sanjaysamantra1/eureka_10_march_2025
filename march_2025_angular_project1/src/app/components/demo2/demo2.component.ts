import { Component, inject } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {
  calculatorService = inject(CalculatorService); // Dependency Injection

  ngOnInit() {
    console.log('Demo-2 ngOnInit');
    console.log(`multiplication of 4,5 is ${this.calculatorService.mul(4, 5)}`)
  }
  ngOnDestroy() {
    console.log('Demo-2 ngOnDestroy')
  }
}
