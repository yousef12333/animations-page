import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  keyframes,
  animate
} from "@angular/animations";
import { LIGHT_SPEED_IN_ANIMATION } from "../../animations/basic/lightSpeedIn";

@Component({
  selector: "app-light-speed-in",
  templateUrl: "./light-speed-in.component.html",
  styleUrls: ["./light-speed-in.component.scss"],
  animations: [LIGHT_SPEED_IN_ANIMATION]
})
export class LightSpeedInComponent implements OnInit {
  animationName = "Light Speed In";
  isShown = "out";
  constructor() {}

  ngOnInit(): void {}

  toggleLightSpeedIn() {
    this.isShown = this.isShown === "out" ? "in" : "out";
  }
}
