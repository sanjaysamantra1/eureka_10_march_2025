import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  myName: string = 'Sachin Tendulkar';
  img_url: string = 'https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png'
  flag: boolean = false;
  colspanNumber : number = 2;

  addToCart() {
    alert('Your Item is added to cart!!!');
  }

}
