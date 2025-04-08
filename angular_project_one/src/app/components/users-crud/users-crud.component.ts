import { Component, EventEmitter } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-crud',
  imports: [
    FormsModule
  ],
  templateUrl: './users-crud.component.html',
  styleUrl: './users-crud.component.css',
  outputs: []
})
export class UsersCrudComponent {

  allUsers: any = []
  url = 'http://localhost:3000/users'
  // constructor(private userService:UsersService){
  // }

  // fetchingUsersData(){
  //   this.allUsers = this.userService.fetchingUsersData();
  //   console.log(this.allUsers)
  // }

  
  // submittingUserDetails(empID:any,empFirstName:any,empLasttName:any,empDep:any,empSal:any,empHiredate:any){
  //   const addedEmp = [empID.value,empFirstName.value,empLasttName.value,empDep.value,empSal.value,empHiredate.value]
    
  // }
  user = {
    id: null,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  };


  constructor(private httpClient:HttpClient){

  }

  ngOnInit(){
    this.httpClient.get(this.url).subscribe(response=>{
        this.allUsers = response;
    })
  }

  onSubmit(form:any){
        this.httpClient.post(this.url,this.user).subscribe(data=>{
          console.log(data);
        })
  }

  onDelete(value:any){
    const endPoints = "/"+value
    console.log(endPoints)
    this.httpClient.delete(this.url).subscribe(data=>{
      console.log(data)
    })
  }

}
