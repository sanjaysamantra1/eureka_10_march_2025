import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/iuser';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-crud-http',
  imports: [],
  templateUrl: './user-crud-http.component.html',
  styleUrl: './user-crud-http.component.css'
})
export class UserCrudHttpComponent {
  users: User[] = [];
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.userService.getAllUsers().subscribe((response:User[]) => {
      this.users = response;
      console.log(response);
    })
  }
}
