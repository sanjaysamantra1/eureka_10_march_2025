import { Component, ViewEncapsulation } from '@angular/core';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { Demo1Component } from '../demo1/demo1.component';
import { UserTableComponent } from '../user-table/user-table.component';
import { PipesComponent } from '../pipes/pipes.component';

@Component({
  selector: 'app-body',
  imports: [
    // ElectronicsComponent,
    // DataBindingComponent
    // DirectivesComponent,
    // MyModalComponent
    // UserListComponent
    // UserTableComponent
    // ProductListComponent
    // Demo1Component
    PipesComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class BodyComponent {

}
