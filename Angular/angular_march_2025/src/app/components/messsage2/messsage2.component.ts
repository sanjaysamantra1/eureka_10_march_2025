import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messsage2',
  imports: [],
  templateUrl: './messsage2.component.html',
  styleUrl: './messsage2.component.css'
})
export class Messsage2Component {
  constructor(private messageService: MessageService) {

  }
  sendMessage(msgText: string) {
    this.messageService.sendMessage(msgText);
  }
  clearMessages(){
    this.messageService.clearMessages();
  }
}
