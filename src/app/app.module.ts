import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { AttentionSeekersComponent } from './feature/animation/pages/attention-seekers/attention-seekers.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FadingEntrancesComponent } from './feature/animation/pages/fading-entrances/fading-entrances.component';

@NgModule({
  declarations: [AppComponent, AttentionSeekersComponent, HeaderComponent, FadingEntrancesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "attention-seekers", component: AttentionSeekersComponent, data: { animation: "attentionPage" } },
      { path: "fading-entrances", component: FadingEntrancesComponent, data: { animation: "fadingPage" } }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
