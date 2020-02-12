import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttentionSeekersComponent } from './attention-seekers.component';
import { PulseComponent } from './components/pulse/pulse.component';
import { BounceComponent } from "./components/bounce/bounce.component";


const routes: Routes = [
  {
    path: "attention-seekers", component: AttentionSeekersComponent, children: [
      { path: "pulse", component: PulseComponent },
      { path: "bounce", component: BounceComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttentionSeekersRoutingModule { }
