import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { FadeInOutComponent } from "./animation/pages/fade-in-out/fade-in-out.component";
import { LightSpeedInComponent } from "./animation/pages/light-speed-in/light-speed-in.component";

import { AttentionSeekersComponent } from './animation/pages/attention-seekers/attention-seekers.component';
import { AttentionSeekersModule } from './animation/pages/attention-seekers/attention-seekers.module';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [AppComponent, FadeInOutComponent, LightSpeedInComponent, AttentionSeekersComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "attention-seekers", component: AttentionSeekersComponent },
      { path: "fade-in-out", component: FadeInOutComponent },
      { path: "", redirectTo: "fade-in-out", pathMatch: "full" },
      { path: "light-speed-in", component: LightSpeedInComponent },
      { path: "**", redirectTo: "fade-in-out" }
    ]),
    AttentionSeekersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
