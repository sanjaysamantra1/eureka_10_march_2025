import { Component } from '@angular/core';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { Demo1Component } from '../demo1/demo1.component';
import { ParentComponent } from '../parent/parent.component';
import { Demo2Component } from '../demo2/demo2.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { HttpDemo2Component } from '../http-demo2/http-demo2.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { FormDemoComponent } from '../form-demo/form-demo.component';

@Component({
  selector: 'app-body',
  imports: [
    // ElectronicsComponent
    //DataBindingComponent,
    // DirectivesComponent,
    // UserListComponent,
    // ProductListComponent,
    // Demo1Component,
    // ParentComponent,
    // Demo2Component,
    // HttpDemo1Component,
    // HttpDemo2Component,
    // ObservableDemo1Component,
    // ObservableDemo2Component,
    // ObservableDemo3Component,
    FormDemoComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag: boolean = true;
}
