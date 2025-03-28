import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { employee_Added_msg } from '../../constants/message_constants';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {

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
