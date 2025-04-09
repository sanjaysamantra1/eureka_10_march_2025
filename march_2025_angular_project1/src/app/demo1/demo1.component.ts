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
     // this.subjectDemo();
     // this.behaviourSubjectDemo();
     // this.replaySubjectDemo();
     this.asyncSubjectDemo();
   }
 
   subjectDemo() {
     let publisher = new Subject();
     publisher.next('AAA');
     publisher.subscribe(val => console.log('Subscriber-1 ', val));
     publisher.next('BBB');
     publisher.subscribe(val => console.log('Subscriber-2 ', val));
     publisher.next('CCC');
   }
   behaviourSubjectDemo() {
     let publisher = new BehaviorSubject('Default-Value');
     publisher.next('AAA');
     publisher.subscribe(val => console.log('Subscriber-1 ', val));
     publisher.next('BBB');
     publisher.subscribe(val => console.log('Subscriber-2 ', val));
     publisher.next('CCC');
   }
   replaySubjectDemo() {
     let publisher = new ReplaySubject();
     publisher.next('AAA');
     publisher.subscribe(val => console.log('Subscriber-1 ', val));
     publisher.next('BBB');
     publisher.subscribe(val => console.log('Subscriber-2 ', val));
     publisher.next('CCC');
   }
   asyncSubjectDemo() {
     let publisher = new AsyncSubject();
     publisher.next('AAA');
     publisher.subscribe(val => console.log('Subscriber-1 ', val));
     publisher.next('BBB');
     publisher.subscribe(val => console.log('Subscriber-2 ', val));
     publisher.next('CCC');
     publisher.complete();
   }
 }