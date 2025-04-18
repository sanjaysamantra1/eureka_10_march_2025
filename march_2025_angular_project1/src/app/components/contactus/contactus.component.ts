import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  hasChanges: boolean = true;
 
  onSubmit(formdata: any) {
    console.log(formdata);
    this.hasChanges = false;
  }
}
