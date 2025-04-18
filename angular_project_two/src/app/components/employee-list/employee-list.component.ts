import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { deleteEmployee } from '../../ngrx/actions/employee.actions';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees$: Observable<Employee[]> = this.store.select(state => state.employees);
  constructor(private store: Store<{ employees: Employee[] }>) {
  }
  ngOnInit() {
  this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
  // this.store.dispatch(fetchEmployees());
  }
  deleteEmp(id: string) {
  const flag = confirm('Are you sure, You want to delete this record?')
  if (flag) {
    this.store.dispatch(deleteEmployee({ id }));
  }
  }
}
