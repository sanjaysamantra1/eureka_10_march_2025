import { Component } from '@angular/core';
import { Child1Component } from "../child1/child1.component";
import { Child2Component } from "../child2/child2.component";

@Component({
  selector: 'app-parent',
  imports: [Child1Component, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  standalone: true

})
export class ParentComponent {
  a: number = 100;
  userNameParent: string = '';

  receiveDataFromChild(userName: string) {
    this.userNameParent = userName;
  }

}
