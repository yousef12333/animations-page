import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  keyframes,
  animate
} from "@angular/animations";

@Component({
  selector: "app-light-speed-in",
  templateUrl: "./light-speed-in.component.html",
  styleUrls: ["./light-speed-in.component.scss"],
  animations: [
    trigger("lightSpeedIn", [
      transition(
        "void => *",
        animate(
          "1s ease-out",
          keyframes([
            style({
              transform: "translate3d(100%, 0, 0) skewX(-30deg)",
              opacity: "0",
              offset: 0
            }),
            style({ transform: "skewX(20deg)", opacity: "1", offset: 0.6 }),
            style({ transform: "skewX(-5deg)", offset: 0.8 }),
            style({ transform: "translate3d(0, 0, 0)", offset: 1 })
          ])
        )
      )
    ])
  ]
})
export class LightSpeedInComponent implements OnInit {
  isActive = false;
  constructor() {}

  activateAnimation() {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {}
}
