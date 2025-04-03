import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {

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
    // clearInterval(this.myTimer);
  }

  sweetAlertMessage() {
    // Swal.fire("SweetAlert2 is working!");

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Sweet Alert Works Fine",
      showConfirmButton: false,
      timer: 1500
    });
  }

  snackyMessage() {
    // new Snackbar('Im a SnackBar... Wanna eat me!');
    const currentDate = new Date();
    new Snackbar(
      `Today is...`, {
        theme: 'dark',
        position: 'top-center',
        actionText: currentDate.toDateString()
      }
    )
  }
}
