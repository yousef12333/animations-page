import { Component, OnInit } from '@angular/core';
import { PULSE_ANIMATION } from "../../../../animations/basic/pulse";

@Component({
  templateUrl: './pulse.component.html',
  styleUrls: ['./pulse.component.scss'],
  animations: [
    PULSE_ANIMATION
  ]
})
export class PulseComponent implements OnInit {
  animationName = "Pulse";
  pulseState = "end"
  constructor() { }

  ngOnInit(): void {
  }

  toggleAnimation() {
    this.pulseState = this.pulseState === "end" ? "start" : "end"
  }

}
