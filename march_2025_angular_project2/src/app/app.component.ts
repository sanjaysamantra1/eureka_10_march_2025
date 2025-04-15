import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Demo1Component

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'march_2025_angular_project2';
}
