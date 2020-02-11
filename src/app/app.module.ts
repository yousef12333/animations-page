import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { FadeInOutComponent } from "./animation/pages/fade-in-out/fade-in-out.component";
import { LightSpeedInComponent } from "./animation/pages/light-speed-in/light-speed-in.component";
import { PulseComponent } from './animation/pages/pulse/pulse.component';

@NgModule({
  declarations: [AppComponent, FadeInOutComponent, LightSpeedInComponent, PulseComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "fade-in-out", component: FadeInOutComponent },
      { path: "", redirectTo: "fade-in-out", pathMatch: "full" },
      { path: "light-speed-in", component: LightSpeedInComponent },
      { path: "pulse", component: PulseComponent },
      { path: "**", redirectTo: "fade-in-out" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
