import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product:any;
  constructor(private activatedRoute: ActivatedRoute,private http:HttpClient){}

  ngOnInit(){
    this.activatedRoute.params.subscribe((params:any) => {
      console.log(params.id)
      this.http.get(`https://fakestoreapi.com/products/${params.id}`).subscribe((response)=>{
        console.log(response);
        this.product = response
      })
   });
  }
}
