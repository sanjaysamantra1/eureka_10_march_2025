import { Component } from '@angular/core';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-navbar',
  imports: [
    MyModalComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
