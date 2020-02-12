import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttentionSeekersComponent } from './attention-seekers.component';
import { PulseComponent } from './components/pulse/pulse.component';
import { BounceComponent } from "./components/bounce/bounce.component";
import { FlashComponent } from "./components/flash/flash.component";


const routes: Routes = [
  {
    path: "attention-seekers", component: AttentionSeekersComponent, children: [
      { path: "pulse", component: PulseComponent },
      { path: "bounce", component: BounceComponent },
      { path: "flash", component: FlashComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttentionSeekersRoutingModule { }
