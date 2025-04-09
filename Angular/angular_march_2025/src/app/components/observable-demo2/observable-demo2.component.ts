import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){
    // this.forkjoinDemo();
    // this.mergeMapDemo();
    this.concatMapDemo();
  }

  forkJoinDemo() {
    let userIds = [1, 3, 5];
    let requests = userIds.map(userId => { // requests = [observable1,observable2,observable3]
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    });
    forkJoin(requests).subscribe({
      next: (response) => { console.log('Next....', response) },
      error: (err) => { console.log(err) },
      complete: () => { console.log('All Data Received') },
    });
  }

  mergeMapDemo() {
    let productPublisher = of(1, 2, 3, 4, 5); // of() returns observable
    productPublisher.pipe(mergeMap(productId => {
      return this.httpClient.get(`https://fakestoreapi.com/products/${productId}`)
    })).subscribe((cartResponse: any) => {
      console.log(cartResponse)
    });
  }

  concatMapDemo() {
    let productPublisher = of(1, 2, 3, 4, 5); // of() returns observable
    productPublisher.pipe(concatMap(productId => {
      return this.httpClient.get(`https://fakestoreapi.com/products/${productId}`)
    })).subscribe((cartResponse: any) => {
      console.log(cartResponse)
    });
  }

}
