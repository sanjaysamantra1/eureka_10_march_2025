import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-career',
  imports: [RouterOutlet,
    RouterLink],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

}
