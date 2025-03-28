import { Component } from '@angular/core';
import productsArr from './product_data';
import { NgxPaginationModule } from 'ngx-pagination';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ZoominDirective } from '../../directives/zoomin.directive';

@Component({
  selector: 'app-product-list',
  imports: [
    NgxPaginationModule,
    FontAwesomeModule,
    ZoominDirective
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = productsArr; // products is a state variable
  p: any;
  faStar = faStar;
}
