import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../models/iuser';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `http://localhost:3000/users`

  constructor(private httpClient: HttpClient) { }

  /*  getAllUsers(): Observable<IUser[]> { // return array of plain javascript objects
     return this.httpClient.get<IUser[]>(`http://localhost:3000/users`);
   } */

  getAllUsers(): Observable<User[]> { // return array of plain javascript objects
    return this.httpClient.get<User[]>(this.url).pipe(
      map((response: User[]) => {
        return response.map((emp: User) => {
          return new User(emp.id, emp.firstName, emp.lastName, emp.email, emp.gender, emp.sal);
        });
      })
    );
  }
}
