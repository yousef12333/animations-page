import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AttentionSeekersRoutingModule } from './attention-seekers-routing.module';
import { BounceComponent } from './components/bounce/bounce.component';
import { FlashComponent } from './components/flash/flash.component';


@NgModule({
  declarations: [BounceComponent, FlashComponent],
  imports: [
    CommonModule,
    AttentionSeekersRoutingModule
  ],
  exports: [
    AttentionSeekersRoutingModule
  ]
})
export class AttentionSeekersModule { }
