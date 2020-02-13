import { Component, OnInit } from '@angular/core';
import { FADE_IN_ANIMATION, FADE_IN_DOWN_ANIMATION } from '../../animations/fading-entrance-animations';
import { trigger, useAnimation, transition } from '@angular/animations';

@Component({
  templateUrl: './fading-entrances.component.html',
  styleUrls: ['./fading-entrances.component.scss'],
  animations: [
    trigger("fadeIn", [transition("off <=> on", useAnimation(FADE_IN_ANIMATION))]),
    trigger("fadeInDown", [transition("off <=> on", useAnimation(FADE_IN_DOWN_ANIMATION))])
  ]
})
export class FadingEntrancesComponent implements OnInit {
  pageHeader = "Fading Entrances"
  // animation states
  fadeIn = "off"
  fadeInDown = "off"
  fadeInDownBig = "off"
  fadeInLeft = "off"
  fadeInLeftBig = "off"
  fadeInRight = "off"
  fadeInRightBig = "off"
  fadeInUp = "off"
  fadeInUpBig = "off"

  // animation names
  animations = [
    "fadeIn",
    "fadeInDown",
    "fadeInDownBig",
    "fadeInLeft",
    "fadeInLeftBig",
    "fadeInRight",
    "fadeInRightBig",
    "fadeInUp",
    "fadeInUpBig"
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleAnimation(animationName: string) {
    this[animationName] = this[animationName] === "off" ? "on" : "off"
  }
}
