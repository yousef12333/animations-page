import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AttentionSeekersRoutingModule } from './attention-seekers-routing.module';
import { BounceComponent } from './components/bounce/bounce.component';


@NgModule({
  declarations: [BounceComponent],
  imports: [
    CommonModule,
    AttentionSeekersRoutingModule
  ],
  exports: [
    AttentionSeekersRoutingModule
  ]
})
export class AttentionSeekersModule { }
