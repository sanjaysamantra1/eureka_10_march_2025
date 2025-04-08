import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { employee_Added_msg } from '../../constants/message_constants';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
  myTimer: any;

  timeNow: any;

  constructor(private calculatorService: CalculatorService) { // Dependency Injection
    // this.myTimer = setInterval(() => {
    //   console.log('I am running from Demo-1...');
    //   this.timeNow = new Date().toLocaleTimeString();
    // }, 1000);

    // let calculatorService = new CalculatorService();
    console.log(`Addition of 2 & 3 is ${calculatorService.add(2, 3)}`)
    console.log(`subtraction of 2 & 3 is ${calculatorService.sub(2, 3)}`)
    console.log(`multiplication of 2 & 3 is ${calculatorService.mul(2, 3)}`)
  }
  ngOnInit() {
    console.log('Demo-1 ngOnInit')
  }
  ngOnDestroy() {  // cleanups, finally block
    console.log('Demo-1 ngOnDestroy');
    clearInterval(this.myTimer);
  }

  snackbar_msg = 'Helloooo, Good Morning';

  openAlert() {
    const title = 'Good Job...';
    const descr = employee_Added_msg;
    const actionType = 'success';
    Swal.fire(title, descr, actionType);
  }

  openSnackbar() {
    new Snackbar(this.snackbar_msg,
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}
