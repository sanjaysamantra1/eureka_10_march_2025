import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [
    FormsModule,
    Child1Component,
    Child2Component,
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  standalone: true
})
export class ParentComponent {
  a: number;
  userNameParent: string = '';
  numArr = [10,20,30,40,50];

  receiveDataFromChild(userName: string) {
    this.userNameParent = userName;
  }

  constructor(private httpClient: HttpClient) { // Dependency Injection, injecting HttpCLient into parentcomponent
    console.log("Parent constructor");
    this.a = 100;
  }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges'); // it wont be called
  // }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }

}
