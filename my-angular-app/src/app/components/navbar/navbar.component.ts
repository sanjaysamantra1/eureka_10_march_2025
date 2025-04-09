import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'nav-root',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavComponent {
  title = 'navbar';
}
