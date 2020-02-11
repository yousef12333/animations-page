import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";

export const LIGHT_SPEED_IN = trigger("lightSpeedIn", [
  state(
    "out",
    style({
      opacity: "0"
    })
  ),
  state(
    "in",
    style({
      color: "red"
    })
  ),
  transition(
    "out => in",
    animate(
      "1s ease-in",
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
  // transition(
  //   "in => out",
  //   animate(
  //     "1s ease-in",
  //     keyframes([
  //       style({
  //         transform: "translate3d(0, 0, 0) skewX(30deg)",
  //         opacity: "1",
  //         offset: 0
  //       }),
  //       style({ transform: "skewX(20deg)", opacity: "0.6", offset: 0.8 }),
  //       style({ transform: "skewX(-5deg)", offset: 0.8 }),
  //       style({ transform: "translate3d(100%, 0, 0)", offset: 1 })
  //     ])
  //   )
  // )
]);
