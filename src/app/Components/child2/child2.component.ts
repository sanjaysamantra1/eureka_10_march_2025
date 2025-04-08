import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs:['aChild','child1Ref']
})
export class Child2Component {
  aChild:any;
  child1Ref:any;

}
