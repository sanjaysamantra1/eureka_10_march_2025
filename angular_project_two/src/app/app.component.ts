import { Component } from '@angular/core';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { Demo1Component } from './components/demo1/demo1.component';

@Component({
  selector: 'app-root',
  imports: [
    // MaterialDemoComponent,
    Demo1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_two';
}
