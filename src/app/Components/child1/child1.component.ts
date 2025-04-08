import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a'],
  outputs: ['nameEvent']
})
export class Child1Component {

  a: any;
  b: number = 200;
  userName: string = 'Virat Kohli';

  nameEvent = new EventEmitter();
  sendDataToParent() {
    this.nameEvent.emit(this.userName);
  }

}
