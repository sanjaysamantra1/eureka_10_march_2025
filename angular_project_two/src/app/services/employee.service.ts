import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  fetchAllEmployees(){
      this.http.get('http://localhost:3000/employees')
  }

  deleteEmployee(id:any){
      this.http.delete(`http://localhost:3000/employees/${id}`)
  }

  addEmployee(newEmp:any){
      this.http.post('http://localhost:3000/employees',newEmp);
  }
}
