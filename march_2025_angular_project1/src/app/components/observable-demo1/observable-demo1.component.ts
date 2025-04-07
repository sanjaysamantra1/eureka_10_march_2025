import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {
  nums!: Observable<any>;

  ngOnInit() {
    // this.demo1();
    this.demo2();
  }

  demo1() {
    let publisher1 = new Observable((observer) => {
      observer.next('AAAAA');
      observer.next('BBBBB');
      observer.next('CCCCC');
      observer.next('DDDDD');
      observer.complete();
    });
    publisher1.subscribe({
      next: (response) => { console.log('Next....', response) }, // 4 times
      error: (err) => { console.log(err) },
      complete: () => { console.log('All Data Received') }, // 1
    });
  }

  demo2() {
    let cars = ['Tata', 'Hundai', 'Toyota', 'Honda'];
    let carsObservable = from(cars);
    carsObservable.subscribe(val => console.log(val));

    this.nums = interval(1000);
    this.nums.subscribe(val => console.log(val));
  }
}
