import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    @Input() title: string | undefined;
    @Input() isFirst = false;

    constructor() { }

    ngOnInit(): void
    {
    }
}
