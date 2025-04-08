import { Component } from '@angular/core';
import { PipeAssignment03312025Component } from '../pipe-assignment-03-31-2025/pipe-assignment-03-31-2025.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { ServiceEmployeeComponent } from '../service-employee/service-employee.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { FolderStructureComponent } from '../folder-structure/folder-structure.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';

// import { Assignment03282025Component } from '../assignment-03-28-2025/assignment-03-28-2025.component';
//import { UserListComponent } from '../user-list/user-list.component';
//import { DirectivesComponent } from '../directives/directives.component';
//import { MyModalComponent } from '../my-modal/my-modal.component';
//import { DataBindingComponent } from '../data-binding/data-binding.component';

@Component({
  selector: 'app-body',
  imports: [
    // DataBindingComponent,
    //DirectivesComponent,
   // MyModalComponent,
  //  UserListComponent,
  //  ProductListComponent,
  //  Assignment03282025Component,
  // PipeAssignment03312025Component,
  // EmployeeCRUDComponent,
  // ServiceEmployeeComponent,
  // HttpDemo1Component,
  // FolderStructureComponent
  SubjectDemo1Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}


