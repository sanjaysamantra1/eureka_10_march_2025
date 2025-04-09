import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class UserCrudComponent {
  users: any[] = [];
  isLoading = false;
  newUser = {id: '',firstName: '',lastName : '', email: '', gender : '',sal : ''};
  editingUserId: number | null = null;

  api_url = 'http://localhost:3000/employees'; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  
  fetchUsers() {
    this.isLoading = true;
    this.http.get<any[]>(this.api_url).subscribe(response => {
      this.users = response;
      this.isLoading = false;
    });
  }


  addUser() {
    if (this.editingUserId) {
      this.http.put(`${this.api_url}/${this.editingUserId}`, this.newUser).subscribe(() => {
        this.fetchUsers();
        this.newUser = {id: '',firstName: '',lastName : '', email: '', gender : '',sal : ''};
        this.editingUserId = null;
      });
    } else {
      
      this.http.post(this.api_url, this.newUser).subscribe(() => {
        this.fetchUsers();
        this.newUser = {id: '',firstName: '',lastName : '', email: '', gender : '',sal : '' };
      });
    }
  }

  deleteUser(id: number) {
    if (confirm('Are you sure to delete this user?')) {
      this.http.delete(`${this.api_url}/${id}`).subscribe(() => {
        this.fetchUsers();
      });
    }
  }

 
  editUser(user: any) {
    this.newUser = {id:user.id , firstName: user.firstName,lastName : user.lastName, email: user.email,gender : user.gender,sal:user.sal };
    this.editingUserId = user.id;
  }
}
