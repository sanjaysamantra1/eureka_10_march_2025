import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar'
import { DemoService } from '../../demo.service';
import { privateDecrypt } from 'crypto';


@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'

})
export class Demo1Component {
    openAlert(){
      Swal.fire('GoodJob!','Highlight','success');
      }
      constructor(private demoService: DemoService){

        console.log(demoService.add(2,4));
        console.log(demoService.sub(2,4));
        console.log(demoService.mul(2,4));
        console.log(demoService.div(2,4));
    }
    openSnack(){
      new Snackbar('Employee added successfully',
        { position: 'bottom-left', theme: 'light', timeout: 5000, actionText: 'X' }
      );
    }
}