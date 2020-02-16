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
import { ROUTER_ANIMATIONS } from "./feature/animation/animations/route-animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    ROUTER_ANIMATIONS
  ]
})
export class AppComponent {
  pageTitle = "Angular Animations";
  animationName = "Fade In-Out";

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet.activatedRouteData);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
