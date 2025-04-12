import { Component } from '@angular/core';
// import { UserviewComponent } from '../userview/userview.component';
// import { MultiFunctionComponent } from '../multi-function/multi-function.component';
// import { ProductListingComponent } from '../product-listing/product-listing.component';
// import { PipesComponent } from '../pipes/pipes.component';
// import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
// import { EmployeeComponent } from '../employee/employee.component';
// import { WorkerCRUDComponent } from '../worker-crud/worker-crud.component';
// import { FolderTreeComponent } from '../folder-tree/folder-tree.component';
import { SignalDemo2Component } from '../signal-demo2/signal-demo2.component';
import { EmployeesCrudComponent } from '../employees-crud/employees-crud.component';
import { FormComponent } from '../form/form.component';
import { ModelformComponent } from '../modelform/modelform.component';
import { FormDemo4Component } from '../form-demo4/form-demo4.component';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    // MultiFunctionComponent
    // UserviewComponent
      //  ProductListingComponent
      // PipesComponent
      // EmployeeCrudComponent
      // EmployeeComponent
      // EmployeesCrudComponent
      // FormComponent
      // ModelformComponent
      // FormDemo4Component
      // FolderTreeComponent
      // SignalDemo2Component
      RouterOutlet,
      ProductDetailsComponent
      ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent { 

}