import { Component } from '@angular/core';
import { NavComponent } from "./components/navbar/navbar.component";
import{FooterComponent} from "./components/footer/footer.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import {CarouselComponent}  from "./components/carousel/carousel.component";
import {BodyComponent} from "./components/body/body.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { AssignmentMarch28Component } from './components/assignment-march28/assignment-march28.component';
import { Assignment1Component } from './components/Assignment-24/assignment-1.component';
import { PipesComponent } from "./components/assignment-31/assignment-31.component";
import { EmployeeAddComponent } from "./components/employee-add/employee-add.component";
import { EmployeeViewDeleteComponent } from "./components/employee-view-delete/employee-view-delete.component";
import { EmployeeParentComponent } from './components/employee-parent/employee-parent.component';
import { EmployeeServiceComponentComponent } from './components/employee-parent/employee-service-component/employee-service-component.component';
import { HttpsClientComponent } from './components/https-client/https-client.component';
import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';
import { SignalDemo1Component } from './components/signal-demo1/signal-demo1.component';
import { SignalDemo2Component } from './components/signal-demo2/signal-demo2.component';
import { FormAssignmentComponent } from './components/form-assignment/form-assignment.component';
import { FormDemo3Component } from './components/form-demo3/form-demo3.component';
@Component({
  selector: 'app-root',
  imports: [
    // NavComponent,
    // CategoriesComponent,
    // CarouselComponent,
    // DataBindingComponent,
    // BodyComponent,
    // Assignment2Component,
    // DataBindingComponent,
    //  Demo1Component,
    // AssignmentMarch28Component,
    // Assignment1Component,
    // PipesComponent,
    // FooterComponent,
    // EmployeeParentComponent,
    // EmployeeServiceComponentComponent
    // HttpsClientComponent
    // FileExplorerComponent,
    // FileTreeItemComponent
    // SignalDemo1Component,
    // SignalDemo2Component
    // FormAssignmentComponent,
    FormDemo3Component
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Crunchyroll';
  
}
