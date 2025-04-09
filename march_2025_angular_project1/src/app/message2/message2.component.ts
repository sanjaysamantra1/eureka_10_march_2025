import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { FormsModule } from '@angular/forms';
 //import { MessageService } from '../../services/message.service';
 
 @Component({
   selector: 'app-message2',
   imports: [FormsModule],
   templateUrl: './message2.component.html',
   styleUrl: './message2.component.css'
 })
 export class Message2Component {

  messagingContext:String | undefined;
   constructor(private messageService: MessageService) {
 
   }
   sendMessage(msgText: string) {
     this.messageService.sendMessage(msgText);
     this.messagingContext ='';
   }
   clearMessages(){
    if(confirm("Are you sue ?"))
    {
      this.messageService.clearMessages();
    }
     
   }
 }