import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {



  hideForm = false;
  loading = false;
  updateFlag = false;
  partialFlag = false;

addingEmplys = {
  id:'',
  firstName:'',
  lastName:'',
  email:'',
  gender:'',
  sal:''
};


  employess:any;
  constructor(private httpClient: HttpClient)
  {

  }

  ngOnInit()
  {
    this.fetchUserData_angular();

    //this.fetchUserData_javaScripThen();

    //this.fetchUserData_javaScripAwait();
  }

  api_url = 'http://localhost:3000/employees';
  fetchUserData_angular()
  {
    this.loading = true;
    this.httpClient.get(this.api_url)//return Observable
    .subscribe((response : any)=>{
      console.log(response);
      this.employess = response;
    });

    this.loading = false;
  }

  fetchUserData_javaScripThen()
  {
   const  api_url = 'http://localhost:3000/employees';
   fetch(api_url)//returns promise
   .then((response)=>{
        console.log(response);
        response.json().then(finalData => {
            console.log(finalData);
            })
   },(error)=>{

   })
  }

  async fetchUserData_javaScripAwait()
  {
   const  api_url = 'http://localhost:3000/employees';
   let response = await fetch(api_url);
   let finalResult = await response.json();
   console.log(finalResult);
  }

  addingEmployees(add : any)
  {
    if(this.hideForm == true)
    {
      this.hideForm = false;
    }
    else
    {
      this.hideForm = true;
    }
    if(add == 'add')
    {
      this.updateFlag = false;
      this.partialFlag = false;
    }
    else
    {
      this.updateFlag = true;
      this.partialFlag = false;
    }
  }

  addingEmployee()
  {

if(this.addingEmplys.email=='' || this.addingEmplys.firstName=='' || this.addingEmplys.gender=='' || this.addingEmplys.id=='' ||
  this.addingEmplys.lastName=='' || this.addingEmplys.sal=='')
  {
    alert("please enter the details")
    return;
  }


    this.httpClient.post(this.api_url,this.addingEmplys, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(response => {
      console.log('Employee added:', response);
    }, error => {
      console.error('Error:', error);
    });


    this.httpClient.get(this.api_url)//return Observable
    .subscribe((response : any)=>{
      console.log(response);
      this.employess = response;
      //this.employess.push(this.addingEmplys);
    });

    this.hideForm = true;
    
    this.fetchUserData_angular();

    this.addingEmplys = {
      id:'',
      firstName:'',
      lastName:'',
      email:'',
      gender:'',
      sal:''
    };

  }
  
  deleteData(emp:any)
  {
    this.loading = true;
    this.httpClient.delete(`${this.api_url}/${emp.id}`).subscribe(
      response => console.log('Deleted:', response),
      error => console.error('Delete failed:', error)
    );

     this.httpClient.get(this.api_url)//return Observable
    .subscribe((response : any)=>{
      console.log(response);
      this.employess = response;
      //this.employess.push(this.addingEmplys);
    });
    this.fetchUserData_angular();
    this.loading = false;
  }


  updateData(emp:any)
  {
    const updatedData = {
      sal: '7500'  // or any fields you want to update
    };
    this.loading = true;
    this.httpClient.patch(`${this.api_url}/${emp.id}`, updatedData).subscribe(
      response => console.log('Patched:', response),
      error => console.error('Patch failed:', error)
    );

    this.httpClient.get(this.api_url)//return Observable
    .subscribe((response : any)=>{
      console.log(response);
      this.employess = response;
      //this.employess.push(this.addingEmplys);
    });
    this.fetchUserData_angular();
    this.loading = false;
    this.hideForm = true;
  }

  fullUpdate(emp: any)
  {
    this.loading = true;
    this.httpClient.put(`${this.api_url}/${emp.id}`, emp).subscribe(
      response => console.log('Updated:', response),
      error => console.error('Update failed:', error)
    );

    this.httpClient.get(this.api_url)//return Observable
    .subscribe((response : any)=>{
      console.log(response);
      this.employess = response;
      //this.employess.push(this.addingEmplys);
    });
    this.fetchUserData_angular();
    //this.loading = false;
  }

  partial()
  {
    if(this.partialFlag == true)
    {
      this.partialFlag = false;
      this.loading = false;
    }
    else
    {
      this.partialFlag = true;
    }

  }

}
