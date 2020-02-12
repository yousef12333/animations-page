import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";

export const LIGHT_SPEED_IN_ANIMATION = trigger("lightSpeedIn", [
  // state(
  //   "out",
  //   style({
  //     opacity: "0"
  //   })
  // ),
  state(
    "in",
    style({
      opacity: "1"
    })
  ),
  transition("out => in", [
    style({
      opacity: "*"
    }),
    animate(
      "1s ease-in",
      keyframes([
        style({
          offset: 0
        }),
        style({ opacity: "0.4", offset: 0.6 }),
        style({ opacity: "0.6", offset: 0.8 }),
        style({ opacity: "1", offset: 1 })
      ])
    )
  ]),
  transition(
    "in => out",
    animate(
      "1s ease-in",
      keyframes([
        style({
          opacity: "1",
          offset: 0
        }),
        style({ opacity: "0.6", offset: 0.8 }),
        style({ opacity: "0.3", offset: 0.8 }),
        style({ opacity: "0", offset: 1 })
      ])
    )
  )
]);
