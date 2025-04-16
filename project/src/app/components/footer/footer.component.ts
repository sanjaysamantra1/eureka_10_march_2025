import { Component, Input } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { EmployeeService1Component } from '../employee-service1/employee-service1.component';
import { DataBindingAssignComponent } from '../data-binding-assign/data-binding-assign.component';
import { DirectivesComponent } from '../directives/directives.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { Demo1Component } from '../demo1/demo1.component';
import { FolderStructureComponent } from '../folder-structure/folder-structure.component';
import { PipeAssignComponent } from '../pipe-assign/pipe-assign.component';
import { UserCrudComponent } from '../user-crud/user-crud.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';
import { FormAssignComponent } from '../form-assign/form-assign.component';
import { ModelFormsComponent } from '../model-forms/model-forms.component';
import { CardTableAssignComponent } from '../card-table-assign/card-table-assign.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [
    //DataBindingComponent,
    //DataBindingAssignComponent,
    // DirectivesComponent,
    // CardTableAssignComponent,
    // MyModalComponent,
    //UserListComponent,
    // ProductListComponent,
    // Demo1Component,
    // PipeAssignComponent,
    // EmployeeCRUDComponent,
    //EmployeeService1Component
    // UserCrudComponent,
    // FolderStructureComponent,
    // SubjectDemo1Component,
    // FormAssignComponent,
    // ModelFormsComponent
    RouterOutlet
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


}
