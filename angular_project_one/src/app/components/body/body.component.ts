import { Component } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ServiceEmployeeComponent } from '../service-employee/service-employee.component';
import { UsersCrudComponent } from '../users-crud/users-crud.component';
import { FolderStructureComponent } from '../folder-structure/folder-structure.component';
import { SignalDemo1Component } from '../signal-demo1/signal-demo1.component';
import { SignalDemo2Component } from '../signal-demo2/signal-demo2.component';
import { FormDemo1Component } from '../form-demo1/form-demo1.component';
import { FormDemo2Component } from '../form-demo2/form-demo2.component';
import { FormsPractiseComponent } from '../forms-practise/forms-practise.component';
import { FormDemo3Component } from '../form-demo3/form-demo3.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    // DataBindingComponent,
  // DirectivesComponent,
  // ProductListComponent,
  // EmployeeCRUDComponent,
  // PipesComponent
  // EmployeeComponent
  // ServiceEmployeeComponent
  // UsersCrudComponent,
  // FolderStructureComponent
  // SignalDemo1Component,
  // SignalDemo2Component,
  // FormDemo1Component,
  // FormDemo2Component,
  // FormsPractiseComponent,
  // FormDemo3Component
  RouterOutlet
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
