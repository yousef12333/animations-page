import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { FadeInOutComponent } from './fade-in-out/fade-in-out.component';
import { LightSpeedInComponent } from './light-speed-in/light-speed-in.component';

@NgModule({
  declarations: [AppComponent, FadeInOutComponent, LightSpeedInComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
