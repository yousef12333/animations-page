import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AttentionSeekersRoutingModule } from './attention-seekers-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AttentionSeekersRoutingModule
  ],
  exports: [
    AttentionSeekersRoutingModule
  ]
})
export class AttentionSeekersModule { }
