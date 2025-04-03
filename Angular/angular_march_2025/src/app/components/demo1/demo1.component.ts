import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
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
