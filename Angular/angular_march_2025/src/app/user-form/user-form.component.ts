import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [
    FormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})

export class UserFormComponent {
  @Input() selectedUser: User | null = null;
  @Output() userCreated = new EventEmitter<void>();
  @Output() userUpdated = new EventEmitter<void>();

  user: User = {
    name: '',
    email: '',
    age: 0
  };

  constructor(private userService: UserService) { }

  ngOnChanges(): void {
    if (this.selectedUser) {
      this.user = { ...this.selectedUser };
    }
  }

  onSubmit(): void {
    if (this.selectedUser) {
      this.userService.updateUser(this.user).subscribe({
        next: () => {
          this.userUpdated.emit();
          this.resetForm();
        },
        error: (error) => console.error('Error updating user:', error)
      });
    } else {
      this.userService.createUser(this.user).subscribe({
        next: () => {
          this.userCreated.emit();
          this.resetForm();
        },
        error: (error) => console.error('Error creating user:', error)
      });
    }
  }

  resetForm(): void {
    this.user = { name: '', email: '', age: 0 };
    this.selectedUser = null;
  }
}
