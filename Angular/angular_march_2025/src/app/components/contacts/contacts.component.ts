import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  imports: [
    FormsModule
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  hasChanges: boolean = true;

  onSubmit(formdata: any) {
    console.log(formdata);
    this.hasChanges = false;
  }
}
