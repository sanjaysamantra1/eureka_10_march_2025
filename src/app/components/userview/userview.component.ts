import { Component } from '@angular/core';
import { USERS } from './user-data';

@Component({
  selector: 'app-userview',
  standalone: true,
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {
  users = USERS;
  isCardView = true;

  toggleView() {
    this.isCardView = !this.isCardView;
  }

  getShortAddress(user: any): string {
    return `${user.address.suite}, ${user.address.street}, ${user.address.city}`;
  }
}