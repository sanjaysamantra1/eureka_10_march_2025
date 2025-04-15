import { Component } from '@angular/core';
import productsArr from './product_data';
import {NgxPaginationModule} from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = productsArr; // Original products array
  filteredProducts = productsArr; // Products array after filtering/sorting
  p:any;
  faStar = faStar;
  searchTerm = '';

  // Search functionality
  searchProducts() {
    this.filteredProducts = this.products.filter(product => 
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
   // this.p = 1; // Reset to first page after search
  }

  // Sort functionality
  sortProducts(order: 'asc' | 'desc') {
    this.filteredProducts = [...this.filteredProducts].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }
}