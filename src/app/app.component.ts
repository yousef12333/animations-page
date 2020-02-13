import { Component } from "@angular/core";
import {
  style,
  state,
  transition,
  trigger,
  animate,
  useAnimation
} from "@angular/animations";
import { RouterOutlet } from '@angular/router';
import { FADE_IN_ANIMATION } from "./feature/animation/animations/fading-entrance-animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("fadeIn", [transition("* <=> *", useAnimation(FADE_IN_ANIMATION))])
  ]
})
export class AppComponent {
  pageTitle = "Angular Animations";
  animationName = "Fade In-Out";

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData

    // && outlet.activatedRouteData['animation']
  }
}
