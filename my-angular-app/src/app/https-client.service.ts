import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface User {
  id?: number; 
  name: string;
  username: string;
  email: string;
  phone: string;
  address?: any;
  website?: string;
  company?: any;
}

@Injectable({
  providedIn: 'root'
})
export class HttpsClientService {
  private apiURL = 'http://localhost:3000/employees';

  constructor(private httpsClient: HttpClient) {}

  getEmployees(): Observable<User[]> {
    return this.httpsClient.get<User[]>(this.apiURL);
  }

  addEmployee(employee: User): Observable<User> {
    // Remove manually set ID to let json-server auto-assign it
    const employeeToAdd = {...employee};
    delete employeeToAdd.id;
    return this.httpsClient.post<User>(this.apiURL, employeeToAdd);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpsClient.delete(`${this.apiURL}/${id}`);
  }

  updateEmployee(id: number, user: User): Observable<User> {
    return this.httpsClient.put<User>(`${this.apiURL}/${id}`, user);
  }
}