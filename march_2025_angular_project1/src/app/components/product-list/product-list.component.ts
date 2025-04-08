import { Component } from '@angular/core';
import productsArr from './product_data';
import {NgxPaginationModule} from 'ngx-pagination';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-product-list',
  imports: [
    NgxPaginationModule,CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = productsArr; // products is a state variable
  p:any;
  faStar = faStar;
  searchText="";

  sortAscending()
  {
    //alert("HI");
    this.products = this.products.sort((a,b)=>a.price - b.price);
    console.log(this.products);
  }
  sortDescending()
  {
    this.products = this.products.sort((a,b)=>b.price - a.price);
    console.log(this.products);
  }

  searchFilter()
  {
    if (this.searchText.trim() === '') {
      this.products = productsArr; // Reset to original data
    } else {  
      this.products = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}