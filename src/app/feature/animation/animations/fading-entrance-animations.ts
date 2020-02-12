import { animation, animate, keyframes, style } from "@angular/animations";

const DEFAULT_TIME = "1s";

export const FADE_IN_ANIMATION =
  animation([
    animate("{{ time }}", keyframes([
      style({ opacity: "1" }),
      style({ opacity: "0" }),
      style({ opacity: "1" })
    ]))
  ], { params: { time: DEFAULT_TIME } })