import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  imports: [],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.css'
})
export class UsersDetailsComponent {
  user :any;
  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((myParams)=>{
      this.user = myParams;
    })
  }
}
