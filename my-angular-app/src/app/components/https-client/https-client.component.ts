import { Component, OnInit } from '@angular/core';
import { HttpsClientService, User } from '../../https-client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-https-client',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './https-client.component.html',
  styleUrl: './https-client.component.css'
})
export class HttpsClientComponent implements OnInit {
  users: User[] = [];
  loading = false;
  newUser: User = { 
    name: '', 
    username: '',
    email: '',
    phone: ''
  };
  editingUser: User | null = null;

  constructor(private userService: HttpsClientService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.loading = true;
    this.userService.getEmployees().subscribe(data => {
      this.users = data;
      this.loading = false;
    });
  }

  addUser() {
    this.userService.addEmployee(this.newUser).subscribe(() => {
      this.fetchUsers();
      this.newUser = { 
        name: '', 
        username: '',
        email: '',
        phone: ''
      };
    });
  }

  deleteUser(id: number | undefined) {
    if (id !== undefined) {
      this.userService.deleteEmployee(id).subscribe({
        next: () => {
          this.fetchUsers();
        },
        error: (err) => {
          console.error('Error deleting user:', err);
          this.fetchUsers();
        }
      });
    } else {
      console.error('Cannot delete user with undefined ID');
    }
  }

  editUser(user: User) {
    this.editingUser = { ...user };
  }

  updateUser() {
    if (this.editingUser && this.editingUser.id !== undefined) {
      this.userService.updateEmployee(this.editingUser.id, this.editingUser).subscribe(() => {
        this.fetchUsers();
        this.editingUser = null;
      });
    } else {
      console.error('Cannot update user with undefined ID');
    }
  }

  cancelEdit() {
    this.editingUser = null;
  }
}