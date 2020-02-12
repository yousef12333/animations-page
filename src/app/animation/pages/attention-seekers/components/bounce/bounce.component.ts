import { Component, OnInit } from '@angular/core';
import { BOUNCE_ANIMATION } from "../../../../animations/basic/bounce";

@Component({
  templateUrl: './bounce.component.html',
  styleUrls: ['./bounce.component.scss'],
  animations: [BOUNCE_ANIMATION]
})
export class BounceComponent implements OnInit {
  animationName = "Bounce"
  bounceState = "start";
  constructor() { }

  ngOnInit(): void {
  }

  toggleAnimation() {
    this.bounceState = this.bounceState === "start" ? "end" : "start"
  }
}
