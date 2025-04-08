import { Injectable } from '@angular/core';
import { employees } from './employees';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  Employee_arr = employees;


  constructor() { }

  totalEmployees(){
    return this.Employee_arr;
  }

  maleEmployees(){
    const emp = this.Employee_arr.filter(emp=>emp.gender=="Male")
    return emp
  }

  feMaleEmployees(){
    const emp = this.Employee_arr.filter(emp=>emp.gender=="Female")
    return emp
  }
}