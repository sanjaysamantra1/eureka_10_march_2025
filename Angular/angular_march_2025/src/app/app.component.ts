import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToggleComponent } from './toggle/toggle.component';
import { StateSelectorComponent } from './state-selector/state-selector.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ToggleInputComponent } from './toggle-input/toggle-input.component';
import { CounterComponent } from './counter/counter.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { UserViewComponent } from './directives/user-view/user-view.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeCRUDComponent } from './employee-crud/employee-crud.component';
import { CommonModule } from '@angular/common';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { EmpCRUDComponent } from './emp-crud/emp-crud.component';
import { EmployeeTableComponent } from './emp-crud/employee-table/employee-table.component';
import { EmployeeAddComponent } from './emp-crud/employee-add/employee-add.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee/employee.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // NavbarComponent,
    // CategoriesComponent,
    // CarouselComponent,
    // BodyComponent,
    // FooterComponent,
    // UserViewComponent,
    // HttpClientModule
    // ToggleComponent,
    // StateSelectorComponent,
    // CalculatorComponent,
    // ToggleInputComponent,
    // CounterComponent,
    // ThemeToggleComponent,
    // EmployeeCRUDComponent,
    // PipesDemoComponent,
    // EmpCRUDComponent,
    // EmployeeTableComponent,
    // EmployeeAddComponent,
    // EmployeeComponent,
    // UserListComponent, //User CRUD in app directory
    // UserFormComponent,
    MainComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angular_march_2025';
   title = 'employee-crud-app';
}
