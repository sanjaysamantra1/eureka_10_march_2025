import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message2',
  imports: [],
  templateUrl: './message2.component.html',
  styleUrl: './message2.component.css'
})
export class Message2Component {
  constructor(private messageService: MessageService) {

  }
  sendMessage(msgText: string) {
    this.messageService.sendMessage(msgText);
  }
  clearMessages(){
    this.messageService.clearMessages();
  }
}
