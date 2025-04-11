import { Component } from '@angular/core';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    MyModalComponent,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
