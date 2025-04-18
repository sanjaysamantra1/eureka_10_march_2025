import { Component } from '@angular/core';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DirectivesComponent } from "../directives/directives.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { MyModalComponent } from '../my-modal/my-modal.component';
import { UserListComponent } from '../user-list/user-list.component';
import { Demo1Component } from "../demo1/demo1.component";
import { EmployeeCrudComponent } from "../employee-crud/employee-crud.component";
import { UserTableComponent } from "../user-table/user-table.component";
import { PipesComponent } from "../pipes/pipes.component";
import { ParentComponent } from "../parent/parent.component";
import { Demo2Component } from '../demo2/demo2.component';
import { EmployeeComponent } from "../employee/employee.component";
import { HttpDemo1Component } from "../http-demo1/http-demo1.component";
import { UserCrudComponent } from "../crud/crud.component";
import { HttpDemo2Component } from "../http-demo2/http-demo2.component";
import { ObservableDemo1Component } from "../observable-demo1/observable-demo1.component";
import { ObservableDemo2Component } from "../observable-demo2/observable-demo2.component";
import { ObservableDemo3Component } from "../observable-demo3/observable-demo3.component";
import { FolderExplorerComponent } from "../folder-explorer/folder-explorer.component";
import { Message1Component } from "../message1/message1.component";
import { Message2Component } from "../message2/message2.component";
import { SignalDemo2Component } from "../signal-demo2/signal-demo2.component";
import { FormDemo2Component } from "../form-demo2/form-demo2.component";
import { SignalDemo1Component } from "../signal-demo1/signal-demo1.component";
import { FormDemo1Component } from "../form-demo1/form-demo1.component";
import { FormDemo3Component } from "../form-demo3/form-demo3.component";
import { FormDemo4Component } from "../form-demo4/form-demo4.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    //  ElectronicsComponent,
    //DataBindingComponent,
    //DirectivesComponent,
     ProductListComponent,
    // MyModalComponent,
    // Demo1Component,
    //Demo2Component,
    // EmployeeCrudComponent,
    // UserTableComponent,
    // PipesComponent,
    // ParentComponent,
    EmployeeComponent,
    //HttpDemo1Component,
    //UserCrudComponent,
    //HttpDemo2Component,
    // ObservableDemo1Component,
    // ObservableDemo2Component,
    // ObservableDemo3Component,
    // FolderExplorerComponent,
    // Message1Component,
    // Message2Component,
    // SignalDemo2Component,
    // FormDemo2Component,
    // SignalDemo1Component,
    // FormDemo1Component,
    // FormDemo3Component,
    // FormDemo4Component
    RouterOutlet
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
flag:boolean = true;
}
