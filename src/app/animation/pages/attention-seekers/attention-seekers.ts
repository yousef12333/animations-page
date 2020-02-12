import { animation, state, style, animate, keyframes } from "@angular/animations";

const DEFAULT_TIMIMG = 1;

export const PULSE_ANIMATION = animation([
  animate("{{ time }}", keyframes([
    style({ transform: "scale3d(1.05, 1.05, 1.05)", offset: "0.5" }),
    style({ transform: "scale3d(1, 1, 1)", offset: "1" })
  ]))
], { params: { time: DEFAULT_TIMIMG } }
)

export const BOUNCE_ANIMATION = animation([
  animate("{{ time }}", keyframes([
    style({
      transform: "translate3d(0, 0, 0)",
      animationTimingFunction: "cubic- bezier(0.215, 0.61, 0.355, 1)", offset: 0.2
    }),
    style({
      transform: "translate3d(0, -30px, 0)",
      animationTimingFunction: "cubic- bezier(0.755, 0.05, 0.855, 0.06)",
      offset: 0.4
    }),
    style({
      transform: "translate3d(0, -30px, 0)",
      animationTimingFunction: "cubic- bezier(0.755, 0.05, 0.855, 0.06)",
      offset: 0.43
    }),
    style({
      transform: "translate3d(0, 0, 0)",
      animationTimingFunction: "cubic- bezier(0.215, 0.61, 0.355, 1)", offset: 0.53
    }),
    style({
      transform: "translate3d(0, -15px, 0)",
      animationTimingFunction: "cubic- bezier(0.755, 0.05, 0.855, 0.06)", offset: 0.7
    }),
    style({
      transform: "translate3d(0, 0, 0)",
      animationTimingFunction: "cubic- bezier(0.215, 0.61, 0.355, 1)", offset: 0.8
    }),
    style({
      transform: "translate3d(0, -4px ,0)", offset: 0.9
    }),
    style({
      transform: "translate3d(0, 0, 0)",
      animationTimingFunction: "cubic- bezier(0.215, 0.61, 0.355, 1)", offset: 1
    })
  ]))
], { params: { time: DEFAULT_TIMIMG } })

export const FLASH_ANIMATION = animation([
  animate("1s", keyframes([
    style({
      opacity: "0", offset: 0.25
    }),
    style({
      opacity: "1", offset: 0.50
    }),
    style({
      opacity: "0", offset: 0.75
    }),
    style({
      opacity: "1", offset: 1
    })
  ]))
], { params: { time: DEFAULT_TIMIMG } })

