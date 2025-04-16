import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Subject, } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.component.html',
  styleUrl: './subject-demo1.component.css'
})
export class SubjectDemo1Component {

  ngOnInit(){
    // this.subjectDemo();
    // this.behaviorSubjectDemo();
    this.asyncSubjectDemo();
  }

  subjectDemo(){
    let publisher = new Subject();
    publisher.next('AAA');
    publisher.subscribe(val=>console.log('subscribe 1',val));
    publisher.next('BBB');
    publisher.subscribe(val=>console.log('subscribe 2', val));
    publisher.next('ccc');

  }

  behaviorSubjectDemo(){
    let publisher = new BehaviorSubject('Default value');
    publisher.next('AAA');
    publisher.subscribe(val=>console.log('subscribe 1',val));
    publisher.next('BBB');
    publisher.subscribe(val=>console.log('subscribe 2', val));
    publisher.next('ccc');
  }

  asyncSubjectDemo(){
    let publisher = new AsyncSubject();
    publisher.next('AAA');
    publisher.subscribe(val=>console.log('subscribe 1',val));
    publisher.next('BBB');
    publisher.subscribe(val=>console.log('subscribe 2', val));
    publisher.next('ccc');
  }
}
