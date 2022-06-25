import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { InputMessageModule } from '../input-message/input-message.module';
import { NgModule } from '@angular/core';
import { ListMessageModule } from '../list-message/list-message.module';

@NgModule({
    declarations: 
    [
        ChatComponent
    ],
    imports:
    [
        CommonModule,
        InputMessageModule,
        ListMessageModule,
    ],
    exports:
    [
        ChatComponent
    ]
})

export class ChatModule { }
