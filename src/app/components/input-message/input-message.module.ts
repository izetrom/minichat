import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputMessageComponent } from './input-message.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    InputMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputMessageComponent
  ]
})
export class InputMessageModule { }
