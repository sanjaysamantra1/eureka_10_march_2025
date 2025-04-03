import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms'; // Error: Can't bind to 'ngModel' since it isn't a known property of 'select'

@Component({
  selector: 'app-state-selector',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './state-selector.component.html',
  styleUrl: './state-selector.component.css'
})
export class StateSelectorComponent {
  states = ['Virginia', 'Maharashtra', 'California', 'Texas', 'New York', 'Florida', 'Illinois'];
  selectedState = this.states[0];
}
