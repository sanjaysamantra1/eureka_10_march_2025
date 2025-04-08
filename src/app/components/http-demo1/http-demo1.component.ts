import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeehttpService } from '../../services/employeehttp.service';

@Component({
  selector: 'app-http-demo1',
  imports: [FormsModule, CommonModule],
  templateUrl: './http-demo1.component.html',
  styleUrls: ['./http-demo1.component.css']
})
export class HttpDemo1Component implements OnInit {
  users: any[] = [];
  isLoading = true;
  newUser = { firstName: '', lastName: '', email: '', gender: '', sal: 0 };
  editingUser: any = null;

  constructor(private employeeService:EmployeehttpService) {}

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.isLoading = true;
    this.employeeService.getEmployees().subscribe((data) => {
      this.users = data;
      this.isLoading = false;
    });
  }

  addUser(): void {
    if (!this.newUser.firstName || !this.newUser.lastName || !this.newUser.email || !this.newUser.gender || this.newUser.sal <= 0) {
      alert('All fields are required, and salary must be greater than 0!');
      return;
    }

    this.employeeService.addEmployee(this.newUser).subscribe(() => {
      this.resetForm();
      this.fetchUserData();
    });
  }

    updateUser(): void {
      if (!this.editingUser.firstName || !this.editingUser.lastName || !this.editingUser.email || !this.editingUser.gender || this.editingUser.sal <= 0) {
        alert('All fields are required, and salary must be greater than 0!');
        return;
      }

      this.employeeService.updateEmployee(this.editingUser.id, this.editingUser).subscribe(() => {
        this.fetchUserData();
        this.editingUser = null;
      });
    }

  deleteUser(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.fetchUserData();
    });
  }

  editUser(user: any): void {
    this.editingUser = { ...user };
  }

  cancelEdit(): void {
    this.editingUser = null;
  }

  resetForm(): void {
    this.newUser = { firstName: '', lastName: '', email: '', gender: '', sal: 0 };
  }
}