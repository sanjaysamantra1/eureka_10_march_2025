import { Component } from '@angular/core';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoCrudComponent } from './components/todo-crud/todo-crud.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  imports: [
    // MaterialDemoComponent,
    // Demo1Component,
    // CounterComponent,
    // TodoCrudComponent,
    EmployeeAddComponent,
    EmployeeListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_two';
}
