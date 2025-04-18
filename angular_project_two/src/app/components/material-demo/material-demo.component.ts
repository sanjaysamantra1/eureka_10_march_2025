import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { EmployeeElement } from '../../models/employee-details';
import { employeesData } from './employee-details';

@Component({
  selector: 'app-material-demo',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './material-demo.component.html',
  styleUrl: './material-demo.component.css'
})
export class MaterialDemoComponent implements AfterViewInit{

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'department','salary','hireDate'];
  dataSource = new MatTableDataSource<EmployeeElement>(employeesData);

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



