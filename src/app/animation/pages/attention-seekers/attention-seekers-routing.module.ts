import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttentionSeekersComponent } from './attention-seekers.component';
import { PulseComponent } from './components/pulse/pulse.component';


const routes: Routes = [
  {
    path: "attention-seekers", component: AttentionSeekersComponent, children: [
      { path: "pulse", component: PulseComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttentionSeekersRoutingModule { }
