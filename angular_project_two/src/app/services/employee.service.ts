import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  fetchAllEmployees(){
      this.http.get('')
  }

  deleteEmployee(id:any){

  }

  addEmployee(newEmp:any){

  }
}
