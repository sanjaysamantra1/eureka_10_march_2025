import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent {
  users: any[] = [];
  isLoading: boolean = false;
  dataFetched: boolean = false;
  isEdit: boolean = false;
  formUser = { id: 0, name: '', email: '', phone: '' };

  constructor(private userService: UserService) {}

  fetchUsers() {
    this.isLoading = true;
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.users = res;
        this.dataFetched = true;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.isLoading = false;
      }
    });
  }

  submitForm() {
    if (this.isEdit) {
      this.userService.updateUser(this.formUser.id, this.formUser).subscribe(() => {
        this.fetchUsers();
        this.resetForm();
      });
    } else {
      this.userService.addUser(this.formUser).subscribe(() => {
        this.fetchUsers();
        this.resetForm();
      });
    }
  }

  editUser(user: any) {
    this.formUser = { ...user };
    this.isEdit = true;
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => this.fetchUsers());
  }

  resetForm() {
    this.formUser = { id: 0, name: '', email: '', phone: '' };
    this.isEdit = false;
  }
}