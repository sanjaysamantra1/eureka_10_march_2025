import { Component } from '@angular/core';
import { EmployeetableComponent } from '../employeetable/employeetable.component';
import { EmployeeaddComponent } from '../employeeadd/employeeadd.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [EmployeetableComponent, EmployeeaddComponent],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent {
  users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: { street: 'Kulas Light', suite: 'Apt. 556' }
    },
    {
      id: 2,
      name: 'ram',
      username: 'ram banu',
      email: 'rambanu@gmail.com',
      address: { street: 'dream', suite: 'Apt. 123' }
    },
    {
      id: 3,
      name: 'sannith',
      username: 'sannith sunny',
      email: 'sannithsunny@gmail.com',
      address: { street: 'spanish trace', suite: 'Apt. 231' }
    },
    {
      id: 4,
      name: 'jay',
      username: 'jay deep',
      email: 'jaydeep@gmail.com',
      address: { street: 'doraman', suite: 'Apt. 765' }
    },
    {
      id: 5,
      name: 'prani',
      username: 'prani salma',
      email: 'pranisalma@gmail.com',
      address: { street: 'summerhouse dr', suite: 'Apt. 365' }
    },
    {
      id: 6,
      name: 'tarun',
      username: 'tarun lion',
      email: 'tarunlion@gmail.com',
      address: { street: 'woodland dr', suite: 'Apt. 756' }
    },
    {
      id: 7,
      name: 'ramesh',
      username: 'ramesh yadav',
      email: 'rameshyadav@gmail.com',
      address: { street: 'tallent trace', suite: 'Apt. 947' }
    },
    {
      id: 8,
      name: 'siri',
      username: 'siri apple',
      email: 'siriapple@gmail.com',
      address: { street: 'california street', suite: 'Apt. 284' }
    },
    {
      id: 9,
      name: 'alexa',
      username: 'alexa amazon',
      email: 'alexaamazon@gmail.com',
      address: { street: 'losvegas dr', suite: 'Apt. 023' }
    },
    {
      id: 10,
      name: 'santosh',
      username: 'santhosh sara',
      email: 'santhoshsara@gmail.com',
      address: { street: 'hollow trace', suite: 'Apt. 486' }
    }
  ];

  addEmployee(newEmployee: any) {
    this.users.push(newEmployee);
  }

  removeEmp(id: number) {
    this.users = this.users.filter(emp => emp.id !== id);
    Swal.fire('Good job!', 'Employee deleted Successfully!', 'success');
  }
}
