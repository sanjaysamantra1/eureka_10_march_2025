import { Component } from '@angular/core';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { Demo1Component } from '../demo1/demo1.component';

@Component({
  selector: 'app-body',
  imports: [
    // ElectronicsComponent
    //DataBindingComponent,
    // DirectivesComponent,
    // UserListComponent,
    ProductListComponent,
    // Demo1Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
