import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

export const FLASH_ANIMATION =
  trigger("flash", [
    state("start", style({
      opacity: "*"
    })),
    transition("start => *", [
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
    ])
  ])