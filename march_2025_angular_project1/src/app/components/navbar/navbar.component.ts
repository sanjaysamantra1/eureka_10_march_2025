import { Component } from '@angular/core';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-navbar',
  imports: [
    MyModalComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userRole: string;
 
  constructor(private userService: UserService) {
    this.userRole = this.userService.getUserRole();
  }
}
