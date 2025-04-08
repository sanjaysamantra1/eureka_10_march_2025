import { Component } from '@angular/core';
import productsArr from '../product-list/product_data'
import {NgxPaginationModule} from 'ngx-pagination';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-assignmnet2',
  imports: [
    NgxPaginationModule,
    FontAwesomeModule,
    ProductListComponent
  ],
  templateUrl: './assignmnet2.component.html',
  styleUrl: './assignmnet2.component.css'
})
export class Assignmnet2Component {
  products = productsArr; // products is a state variable
  p:any;
  faStar = faStar;

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
}
