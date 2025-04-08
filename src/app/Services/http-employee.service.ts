import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpEmployeeService {

  
  employees: any=[];
  api_url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {
  }
  

  
  fetchUserData_angular() {
    this.httpClient.get(this.api_url).subscribe((response: any) => {
      this.employees = response;
      
    });
    return this.employees;
   
  }

  addEmployee(newEmployee: any) {
    this.httpClient.post(this.api_url, newEmployee).subscribe(() => {
      this.fetchUserData_angular(); 
    });
    return this.employees;
  }

  deleteEmployee(empId: string) {
    this.httpClient.delete(`${this.api_url}/${empId}`).subscribe(() => {
      this.fetchUserData_angular(); 
    });
    return this.employees;
  }

  editEmployee(empId: string, newEmployee: any) {
    this.httpClient.put(`${this.api_url}/${empId}`, newEmployee).subscribe(() => {
      this.fetchUserData_angular(); 
    });
    return this.employees;
  }

  
  // fetchUserData_angular() {
  //   this.httpClient.get(this.api_url).subscribe(response => {
  //      this.employees = response;
  //   });
  //   return this.employees;
  // }

  // addEmployee(newEmployee: any) {
  //   this.httpClient.post(this.api_url,newEmployee).subscribe(response => {
  //     this.employees=response;
  //     this.employees.push(newEmployee);
      
  //   });
  //   return this.employees;  
  // }
  // deleteEmployee(Emp_id: string) {
  //   this.httpClient.delete(this.api_url+'/'+Emp_id).subscribe(response => {
  //     this.employees=response;
  //     this.employees = this.employees.filter((emp: any) => emp.id !== Emp_id);
        
  //     });
  
  //   return this.employees;
  // }

  
  // editEmployee(   EMP_id: string, newEmployee: any) {
  //   this.httpClient.put(this.api_url+'/'+EMP_id, newEmployee).subscribe(response => {
  //     this.employees=response;
  //     this.employees = this.employees.map((emp: any) => emp.id == EMP_id ? newEmployee : emp);
  //   });
  //   return this.employees;
  // }
  
    
}



    
  
    
