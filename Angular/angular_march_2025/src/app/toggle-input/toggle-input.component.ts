import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-input',
  imports: [],
  templateUrl: './toggle-input.component.html',
  styleUrl: './toggle-input.component.css'
})
export class ToggleInputComponent {
  isPassword = true;

  toggleType() {
    this.isPassword = !this.isPassword;
  }
}
