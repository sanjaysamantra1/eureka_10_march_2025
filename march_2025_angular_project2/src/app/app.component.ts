import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoCrudComponent } from './components/todo-crud/todo-crud.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    // Demo1Component,
    // MaterialDemoComponent,
    // CounterComponent,
    // TodoCrudComponent
    EmployeeListComponent,
    EmployeeAddComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'march_2025_angular_project2';
}
