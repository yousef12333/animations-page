import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

export const PULSE_ANIMATION =
  trigger("pulse", [
    state("start", style({
      transform: "*"
    })),
    transition("start <=> *", [animate("0.5s", keyframes([
      style({ transform: "scale3d(1.05, 1.05, 1.05)", offset: "0.5" }),
      style({ transform: "scale3d(1, 1, 1)", offset: "1" })
    ]))])
  ])