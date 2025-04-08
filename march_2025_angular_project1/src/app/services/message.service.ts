import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new Subject<any>();

  sendMessage(message: string) {
    this.messageSubject.next({ text: message }); // publishing a new data
  }

  clearMessages() {
    this.messageSubject.next(null); // publishing a null data
  }

  getMessage(): Observable<any> {
    return this.messageSubject.asObservable(); // converts subject to observable
  }

}
