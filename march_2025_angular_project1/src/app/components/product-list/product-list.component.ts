import { Component } from '@angular/core';
import productsArr from './product_data';
import { NgxPaginationModule } from 'ngx-pagination';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ZoominDirective } from '../../directives/zoomin.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [
    FormsModule,
    NgxPaginationModule,
    FontAwesomeModule,
    ZoominDirective
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = productsArr; // products is a state variable
  filteredProducts = productsArr; // filteredProducts is a state variable
  p: any;
  faStar = faStar;
  searchText: string = '';

  searchProducts() {
    this.filteredProducts = this.products.filter(product => {
      return product.description.includes(this.searchText);
    })
  }
  sortProducts(type: string) {
    if (type == 'asc') {
      this.products.sort((p1, p2) => p1.price - p2.price);
    } else {
      this.products.sort((p1, p2) => p2.price - p1.price);
    }
  }
}
