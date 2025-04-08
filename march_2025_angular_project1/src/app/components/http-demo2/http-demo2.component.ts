import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo2',
  imports: [],
  templateUrl: './http-demo2.component.html',
  styleUrl: './http-demo2.component.css'
})
export class HttpDemo2Component {
  api_url = 'https://jsonplaceholder.typicode.com/comments';
  comments: any = [];

  constructor(private httpClient: HttpClient) {
  }

  fetchAllComments() {
    this.httpClient.get(this.api_url).subscribe((response) => {
      this.comments = response;
    })
  }

}
