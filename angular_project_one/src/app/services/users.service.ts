import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: any;
  url = 'http://localhost:3000/users';

  constructor(private httpClient:HttpClient) { }

  fetchingUsersData(){
    this.httpClient.get(this.url).subscribe(response =>{
      this.users = response;
    })
    return this.users
  }

  postingData(){
    {

    }
  }
}
