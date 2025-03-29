import { Component } from '@angular/core';
import userData from '../user-list/users';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-user-table',
  imports: [
    MyModalComponent
  ],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  users = userData;

  selectedUser: any;
}
