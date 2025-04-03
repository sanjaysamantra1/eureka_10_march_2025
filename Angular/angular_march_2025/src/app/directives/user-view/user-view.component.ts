import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users: any[] = [];
  showTableView = false;
  isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            role: this.getRandomRole(),
            city: user.address.city,
            company: user.company.name
          }));
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching users:', err);
          this.isLoading = false;
        }
      });
  }

  toggleView() {
    this.showTableView = !this.showTableView;
  }

  private getRandomRole() {
    const roles = ['Admin', 'User', 'Editor', 'Viewer'];
    return roles[Math.floor(Math.random() * roles.length)];
  }
}