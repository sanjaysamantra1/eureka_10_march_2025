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
  FolderStructureComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
