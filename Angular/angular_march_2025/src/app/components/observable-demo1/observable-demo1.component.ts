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
  nums: Observable<any> | undefined;

  ngOnInit() {
    // this.demo1();
    this.demo2();
  }

  demo1() {
    let publisher$ = new Observable((observer) => {
      observer.next("AAA");
      observer.next("BBB");
      observer.next("CCC");
      observer.next("DDD");
      observer.complete();
    });
    // subscribe takes 3 arguments in total. Subscribe is used only when the left side variable is observable
    publisher$.subscribe({
      next: (response) => {console.log("Next...",response)}, // Get called 4 times since publisher is publishing data 4 times
      error: (err) => {console.log(err)},
      complete: () => {console.log("All data received")} // Called once when all the data is received
    });
  }

  demo2() {
    let cars = ['Tesla', 'Ferrari', 'Honda', 'Maserati']; //cars array
    let carsObservable$ = from(cars); // from(): takes input of cars array and converts it into Observable & Publisher
    
    carsObservable$.subscribe(val => console.log(val)); //Subscriber

    // this.nums = interval(1000);
    // this.nums.subscribe(val => console.log(val));
  }

}
