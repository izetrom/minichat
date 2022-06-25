import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { InputMessageModule } from '../input-message/input-message.module';
import { NgModule } from '@angular/core';
import { ValidationButtonModule } from '../validation-button/validation-button.module';
import { ListMessageModule } from '../list-message/list-message.module';

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    InputMessageModule,
    ListMessageModule,
    ValidationButtonModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
