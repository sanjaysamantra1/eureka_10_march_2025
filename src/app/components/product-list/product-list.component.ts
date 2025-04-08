import { Component } from '@angular/core';
import productsArr from './product_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [NgxPaginationModule,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = productsArr;
  p:any;
  searchQuery: string = '';
  filteredProducts = [...this.products];

  searchItems() {
    this.filteredProducts = this.products.filter(product => 
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  ascending() {
    console.log("ASC");
    this.filteredProducts = this.products.sort((product1: any, product2: any) => {
      return product1.price - product2.price;
    })
  }

  descending() {
    console.log("DESC");
    this.filteredProducts = this.products.sort((product1: any, product2: any) => {
      return product2.price - product1.price;
    })
  }

}
