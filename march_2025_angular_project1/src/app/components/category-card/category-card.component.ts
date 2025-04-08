import { Component } from '@angular/core';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
  inputs:['categoryObj']
})
export class CategoryCardComponent {
  categoryObj:any;
}
