import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeehttpService {

  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http:HttpClient) {}

  getEmployees():Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post(this.apiUrl, employee);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateEmployee(id: string, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }
  
}
