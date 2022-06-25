import { CommonModule } from '@angular/common';
import { ListMessageComponent } from './list-message.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ListMessageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListMessageComponent
  ]
})
export class ListMessageModule { }
