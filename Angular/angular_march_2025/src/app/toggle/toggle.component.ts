import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common'; //this thing was not imported and it was giving error: NgIf Directive Error

@Component({
  selector: 'app-toggle',
  imports: [
    CommonModule
  ],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
