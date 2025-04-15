import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user : any;
  constructor(private activateRoute: ActivatedRoute, private http:HttpClient) {
    console.log(this.activateRoute.params); //returns an observable
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      console.log(params.id);
      this.http.get(`https://jsonplaceholder.typicode.com/users/${params.id}`).subscribe((userData: any) => {
        this.user = userData;
      });
    });
  }

}
