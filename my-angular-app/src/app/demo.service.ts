import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
 
  constructor() {
    
   }
   add( a:number,
    b: number){
    return a+ b;
  }
  mul(a:number,b:number){
    return a*b;

  }
  sub(a:number,b:number){
    return a-b;
    
  }
  div(a:number,b:number){
    return a/b;
    
  }
}
