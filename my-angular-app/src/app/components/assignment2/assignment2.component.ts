import { Component } from '@angular/core';
import usersData from './users.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  imports: [FormsModule, CommonModule, NgxPaginationModule]
})
export class Assignment2Component {
  users = usersData;
  filteredUsers = [...this.users];
  searchQuery: string = '';
  p:any;
  currentPage: number =1;

  searchProducts() {
    this.filteredUsers = this.users.filter(emp =>
      emp.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  sortProducts(ascending: boolean) {
    this.filteredUsers.sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
  }
  trackByEmpId(index: number, emp: any) {
    return emp.id;
  }
}