import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [
    RouterLink
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  constructor(private routerObj: Router){

  }
  navigateToHomeAfterDoing(){
    console.log('Do Somethng..........')
    this.routerObj.navigate(['home'])
  }
}
