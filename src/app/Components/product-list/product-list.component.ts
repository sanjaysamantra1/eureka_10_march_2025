import { Component } from '@angular/core';
import productsArr from './product_data';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-list',
  imports: [
    FormsModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = productsArr;
  prod: string = ''; 
  p:any;
  faMagnifyingGlassMinus=faMagnifyingGlassMinus;

  filteredProducts() {
    return this.products.filter(product => 
      product.title.toLowerCase().includes(this.prod.toLowerCase())
    );
  }

  sortasc() {
    this.products.sort((a, b) => a.price - b.price);
  }

  sortdesc() {
    this.products.sort((a, b) => b.price - a.price);
  }

}
