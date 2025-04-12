import { Component } from '@angular/core';
import productArr from './product_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [
      NgxPaginationModule,
      FormsModule,
      RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
      products = productArr;
      p:any;
      userValue: any = '';
      
      searchQuery: string = '';  
      

        searchItems() {
          this.products = this.products.filter(product => 
            product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }

      ascending(){
        this.products = this.products.sort((p1,p2)=>p1.price-p2.price)
      }
      descending(){
        this.products = this.products.sort((p1,p2)=>p2.price-p1.price)
      }

      
}



// for (const product of productArr){
  
// }
