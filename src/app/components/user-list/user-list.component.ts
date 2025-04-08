import { Component } from '@angular/core';
import * as data from './users.json'; 
import userData from './users';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  //users = (data as any).default; 
users = userData;
}
