import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css']
})

export class InputMessageComponent implements OnInit {

    message = '';
    @Input() isFirst: boolean = false;
    constructor(private messageService: MessagesService) { }

    ngOnInit(): void {}
    sendMessage(): void
    {
        this.messageService.setNewMessage(this.message, this.isFirst);
        this.message = '';
    }
}
