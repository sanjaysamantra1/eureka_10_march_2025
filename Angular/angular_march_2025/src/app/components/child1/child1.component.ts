import { Output, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges, ViewChild 
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [
    FormsModule
  ],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a', 'numArr'],
  outputs: ['nameevent'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnChanges {
  a: any;
  b: number = 200;
  numArr: any;
  userName: string = 'Virat Kohli';
  @ViewChild('inputBox1')
  inputBoxRef!: ElementRef;

  @Output() nameEvent = new EventEmitter();
  sendDataToParent() {
    this.nameEvent.emit(this.userName);
  }
  sayHi() {
    console.log('Hiiiiiiiii')
  }

  constructor(private httpClient: HttpClient, private cdr: ChangeDetectorRef) {
    console.log("Child-1 constructor");
    console.log(this.inputBoxRef);

    // setInterval(() => {
    //   this.cdr.markForCheck();
    // }, 5000);
  }
  ngOnChanges(myChanges: SimpleChanges) {
    console.log('Child-1 ngOnChanges');
    console.log(myChanges)
  }
  ngOnInit() {
    console.log('Child-1 ngOnInit');

    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      console.log(response);
    });
  }
  ngDoCheck() {
    console.log('Child-1 ngDoCheck');
    // this.cdr.markForCheck();
  }
  ngAfterContentInit() { // 1 after first docheck
    console.log('Child-1 ngAfterContentInit');
  }
  ngAfterContentChecked() { // n times after every docheck
    console.log('Child-1 ngAfterContentChecked');
  }
  ngAfterViewInit() { //  once after first docheck
    console.log('Child-1 ngAfterViewInit');
    console.log(this.inputBoxRef);
    this.inputBoxRef.nativeElement.focus();
    this.inputBoxRef.nativeElement.style.backgroundColor = 'cyan';
  }
  ngAfterViewChecked() { // n times after every docheck
    console.log('Child-1 ngAfterViewChecked');
  }
  refresh() {
    this.cdr.markForCheck();
  }
}