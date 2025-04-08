import { Component } from '@angular/core';
import ProductsArr from './data';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  product = ProductsArr;

  Name:string="";
  price:number=0;
  n: string='';
  p: number=0;
  temp={};
  editindex:number= 0;
  
  AddEmp( )
  {
      if(this.editindex==0)
        {
            let exist=this.product.find(p=>p.title==this.Name);
            if(exist)
            {

              console.log("Already Exist");
              return;
            }
            
            let  newEmp={title:this.Name,price:this.price};
            this.product.push(newEmp);
        }
        else{
          this.product[this.editindex-1].title=this.Name;
          this.product[this.editindex-1].price=this.price;
        }
  }

  Edit(i:number, n: string, p: number) {
    this.Name=n;
    this.price=p;
    this.editindex=i;
  }
  delete(name:string){
    this.product=this.product.filter(p=>p.title!=name);
    
  }

  sName:string="";

  Delete(name:string){
    this.sName=name;

  }
}
