import { Component } from '@angular/core';
import userData from './users';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = userData;
}
