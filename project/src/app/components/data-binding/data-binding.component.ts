import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  myName: string = 'Ajith';
  img_url:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfQIHZlpfo9wkqtnTvc3SIApFoSzUhBPPActtiSLg2Vd9dfUqMKPbsfs&s';
  flag: boolean= false;
  num1: number=0;
  num2:number=0;
  // colspanNumber

  addToCart(){
    alert('You item is added to the cart !!!')
  }

  additionResult: number = 0;
  calculateOnDemand(num3: HTMLInputElement, num4: HTMLInputElement) {
    console.log(num3, num3.classList, num3.id, num3.type);
    this.additionResult = +num3.value + +num4.value;
  }
}