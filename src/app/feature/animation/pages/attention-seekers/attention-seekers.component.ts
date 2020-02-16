import { Component, OnInit } from '@angular/core';
import { PULSE_ANIMATION, BOUNCE_ANIMATION, FLASH_ANIMATION, SHAKE_ANIMATION, HEARTBEAT_ANIMATION, JELLO_ANIMATION } from "../../animations/attention-seeker-animations";
import { trigger, useAnimation, transition } from '@angular/animations';

@Component({
  templateUrl: './attention-seekers.component.html',
  styleUrls: ['./attention-seekers.component.scss'],
  animations: [
    trigger("bounce", [transition("off <=> on", useAnimation(BOUNCE_ANIMATION))]),
    trigger("pulse", [transition("off <=> on", useAnimation(PULSE_ANIMATION))]),
    trigger("flash", [transition("off <=> on", useAnimation(FLASH_ANIMATION))]),
    trigger("shake", [transition("off <=> on", useAnimation(SHAKE_ANIMATION))]),
    trigger("heartbeat", [transition("off <=> on", useAnimation(HEARTBEAT_ANIMATION, { params: { time: "1.3s ease-in-out" } }))]),
    trigger("jello", [transition("off <=> on", useAnimation(JELLO_ANIMATION))])
  ]
})
export class AttentionSeekersComponent implements OnInit {

  host: { "[@ROUTE_FADE_IN_ANIMATION]": ""; };
  pageHeader = "Attention Seekers";
  // animation states
  bounce = "off";
  flash = "off";
  heartbeat = "off";
  jello = "off";
  pulse = "off";
  rubberband = "off";
  shake = "off";
  swing = "off";
  tada = "off";
  wobble = "off";

  // names of animations
  animations = [
    "bounce",
    "flash",
    "heartbeat",
    "jello",
    "pulse",
    "rubberband",
    "shake",
    "swing",
    "tada",
    "wobble"
  ];
  constructor() { }


  ngOnInit(): void {
  }

  toggleAnimation(animationName: string) {
    this[animationName] = this[animationName] === "off" ? "on" : "off";
  }

}
