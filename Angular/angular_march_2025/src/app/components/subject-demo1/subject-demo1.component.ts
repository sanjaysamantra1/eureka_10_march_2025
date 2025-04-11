import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.component.html',
  styleUrl: './subject-demo1.component.css'
})
export class SubjectDemo1Component {

  ngOnInit() {
    //this.subjectDemo();
    // this.behaviourSubjectDemo();
    // this.replaySubjectDemo();
    this.asyncSubjectDemo();
  }

  // Airtel plan I subscribe for April 2025 then I will get plan from that time only not April 2024.
  subjectDemo() {
    let publisher = new Subject();
    publisher.next('AAA');
    publisher.subscribe(val => console.log('Subscriber-1: ', val)); //Only subscribes to upcoming values i.e BBB and CCC
    publisher.next('BBB');
    publisher.subscribe(val => console.log('Subscriber-2: ', val)); //Only subscribes to upcoming values i.e CCC
    publisher.next('CCC');
  }

  //one previous value(current/initial) and all upcoming values
  behaviourSubjectDemo() {
    let publisher = new BehaviorSubject('Default-value'); //Expects a default value
    publisher.next('AAA');
    publisher.subscribe(val => console.log('Subsciber-1: ', val));
    publisher.next('BBB');
    publisher.subscribe(val => console.log('Subsciber-2: ', val));
    publisher.next('CCC');
  }

  //all the previous and upcoming values
  replaySubjectDemo() {
    let publisher = new ReplaySubject();
    publisher.next('AAA');
    publisher.subscribe(val => console.log('Subsciber-1: ', val));
    publisher.next('BBB');
    publisher.subscribe(val => console.log('Subscriber-2: ', val));
    publisher.next('CCC');
  }

  //the last value that was published the subject will get
  asyncSubjectDemo() {
    let publisher = new AsyncSubject();
    publisher.next('AAA');
    publisher.subscribe(val => console.log('Subsciber-1: ', val));
    publisher.next('BBB');
    publisher.subscribe(val => console.log('Subscriber-2: ', val));
    publisher.next('CCC'); //last value that is published
    publisher.complete(); //complete() is when it understand that it is the last value
  }

}
