import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

export const FADE_IN_OUT_ANIMATION = trigger("fadeInOut", [
  state(
    "void",
    style({
      opacity: "0",
      transform: "translateX(40px)"
    })
  ),
  state(
    "show",
    style({
      opacity: "1"
    })
  ),
  transition("void <=> *", [animate(".5s")])
]);
