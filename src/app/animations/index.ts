import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

export const FADE_IN_OUT_ANIMATION = trigger("fadeInOutTrigger", [
  state(
    "in",
    style({
      opacity: "1"
    })
  ),
  state(
    "out",
    style({
      opacity: "0"
    })
  ),
  transition("out => in", animate(".6s 100ms ease-in")),
  transition("in => out", animate(".7s 100ms ease-out"))
]);
