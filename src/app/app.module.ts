import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { FadeInOutComponent } from "./fade-in-out/fade-in-out.component";
import { LightSpeedInComponent } from "./light-speed-in/light-speed-in.component";

@NgModule({
  declarations: [AppComponent, FadeInOutComponent, LightSpeedInComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/fade-in-out", pathMatch: "full" },
      { path: "fade-in-out", component: FadeInOutComponent },
      { path: "light-speed-in", component: LightSpeedInComponent },
      { path: "**", redirectTo: "/fade-in-out" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
