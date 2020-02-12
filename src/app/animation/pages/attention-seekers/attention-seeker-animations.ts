import { animation, state, style, animate, keyframes } from "@angular/animations";

const DEFAULT_TIMIMG = "1s";

export const PULSE_ANIMATION = animation([
  animate("{{ time }}", keyframes([
    style({ transform: "scale3d(1.2, 1.2, 1.2)", offset: "0.5" }),
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
  animate("{{ time }}", keyframes([
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

export const SHAKE_ANIMATION = animation([
  animate("{{ time }}", keyframes([
    style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    style({ transform: "translate3d(-10px, 0, 0)", offset: 0.1 }),
    style({ transform: "translate3d(10px, 0, 0)", offset: 0.2 }),
    style({ transform: "translate3d(-10px, 0, 0)", offset: 0.3 }),
    style({ transform: "translate3d(10px, 0, 0)", offset: 0.4 }),
    style({ transform: "translate3d(-10px, 0, 0)", offset: 0.5 }),
    style({ transform: "translate3d(10px, 0, 0)", offset: 0.6 }),
    style({ transform: "translate3d(-10px, 0, 0)", offset: 0.7 }),
    style({ transform: "translate3d(10px, 0, 0)", offset: 0.8 }),
    style({ transform: "translate3d(-10px, 0, 0)", offset: 0.9 }),
    style({ transform: "translate3d(0, 0, 0)", offset: 1 }),
  ]))
], { params: { time: DEFAULT_TIMIMG } })

export const HEARTBEAT_ANIMATION =
  animation([animate("{{ time }}", keyframes([
    style({ transform: "scale(1)", offset: 0 }),
    style({ transform: "scale(1.3)", offset: 0.14 }),
    style({ transform: "scale(1)", offset: 0.28 }),
    style({ transform: "scale(1.3)", offset: 0.42 }),
    style({ transform: "scale(1)", offset: 0.70 })
  ]))], { params: { time: DEFAULT_TIMIMG } })