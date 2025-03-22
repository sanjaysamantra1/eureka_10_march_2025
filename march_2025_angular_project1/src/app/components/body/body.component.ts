import { Component } from '@angular/core';
import { ElectronicsComponent } from '../electronics/electronics.component';

@Component({
  selector: 'app-body',
  imports: [
    ElectronicsComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
