import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';

@Component({
  selector: 'app-employment-crud',
  imports: [FormsModule,EmployeeTableComponent,EmployeeAddComponent],
  templateUrl: './employment-crud.component.html',
  styleUrl: './employment-crud.component.css'
})
export class EmploymentCRUDComponent {

addEmployee = true;

  employees = [
    {id:'27', name: 'veeresh Doe', gender: 'M', age: 30, position: 'Developer' },
    {id:'28', name: 'Alice Smith', gender: 'F', age: 28, position: 'Designer' },
    {id:'58', name: 'Bob Johnson', gender: 'M', age: 35, position: 'Manager' },
    {id:'38', name: 'Emma Watson', gender: 'F', age: 25, position: 'HR' }
  ];

empAdd()
{
  //alert("hi");
  if(this.addEmployee == true)
  {
    this.addEmployee = false;
  }
  else
  {
    this.addEmployee = true;
  }
}

receiveDataFromChild(emp1: any) {
  //this.employees = userName;
  this.employees = this.employees.filter((employee: { id: any; }) => employee.id !== emp1.id);
}

receiveDataToAdd(newEmployee: any) {
  //this.employees = userName;
  //this.employees = this.employees.filter((employee: { name: any; }) => employee.name !== emp1.name);
  //alert(newEmployee.name);
  this.employees.push(newEmployee);
}


}
