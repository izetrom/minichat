import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MessagesService {

    private messages = new Subject<[string, boolean]>();
    messages$ = this.messages.asObservable();
    constructor() { }

    setNewMessage(message: string, from: boolean): void {
        this.messages.next([message, from]);
    }
}
