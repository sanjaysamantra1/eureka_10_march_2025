import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: any;

  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((myQueryParams) => {
      this.product = myQueryParams;
    });
  }
}