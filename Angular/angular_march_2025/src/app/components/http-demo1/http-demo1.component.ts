import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  isLoading: boolean = false;
  users: any;

  constructor(private httpClient: HttpClient) {
  }
  
  ngOnInit() {
    this.fetchUserData_javascript_then();
    this.fetchUserData_javascript_async_await();
    // this.fetchUserData_angular();
  }

  fetchUserData_javascript_then() {
    const api_url = 'https://jsonplaceholder.typicode.com/users';

    fetch(api_url).then(
      (response) => {
        response.json().then(
          finalData => {
            console.log(finalData)
          }
        )
      },
      (err) => {
        console.log(err)
      },
    )

  }

  async fetchUserData_javascript_async_await() {
    const api_url = 'https://jsonplaceholder.typicode.com/users';
    let response = await fetch(api_url);
    let finalResponse = await response.json();
    console.log(finalResponse)
  }

  fetchUserData_angular() {
    this.isLoading = true;
    const api_url = 'ttps://jsonplaceholder.typicode.com/users';

    //get(api_url, {observe: 'response'})
    // observe: 'response' we get extra data along with body

    this.httpClient.get(api_url).subscribe(response => {   
      this.isLoading = false;
      console.log(response);
      this.users = response;
    });
  }

}
