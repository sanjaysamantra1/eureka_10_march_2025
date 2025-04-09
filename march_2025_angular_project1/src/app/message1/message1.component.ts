import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
 //import { MessageService } from '../../services/message.service';
 
 @Component({
   selector: 'app-message1',
   imports: [],
   templateUrl: './message1.component.html',
   styleUrl: './message1.component.css'
 })
 export class Message1Component {
   messages: any = []
   constructor(private messageService: MessageService) {
   }
 
   ngOnInit() {
     this.messageService.getMessage().subscribe(message => {
       if (message) {
         this.messages.push(message);
       } else {
         this.messages = [];
       }
     });
   }
 }