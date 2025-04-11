import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messsage1',
  imports: [],
  templateUrl: './messsage1.component.html',
  styleUrl: './messsage1.component.css'
})
export class Messsage1Component {
  messages: any = [];
  
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
