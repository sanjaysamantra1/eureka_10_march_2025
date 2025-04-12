import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesCrudService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap(() => console.log('Fetching employees'))
    );
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post(this.apiUrl, employee).pipe(
      tap((res) => console.log('Employee added:', res))
    );
  }

  updateEmployee(id: string, employee: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    console.log('Update URL:', url, 'Data:', employee);
    return this.http.put(url, employee).pipe(
      tap((res) => console.log('Update successful:', res)),
      catchError(error => {
        console.error('Update failed:', error);
        return throwError(() => new Error('Update failed'));
      })
    );
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => console.log('Employee deleted'))
    );
  }
}