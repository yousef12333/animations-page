import { animation, animate, keyframes, style } from "@angular/animations";

const DEFAULT_TIME = "1s";

// add parameters to params object to use in animation
export function fadeInX(startX, endX) {
  return animation(
    animate("{{ time }}", keyframes([
      style({ opacity: "0", transform: "translate3d({{ startX }}, 0, 0)" }),
      style({ opacity: "1", transform: "translate3d({{ endX }}, 0, 0)" })
    ])),
    { params: { time: DEFAULT_TIME, startX, endX } }
  )
}

export function fadeInY(startY, endY) {
  return animation(
    animate("{{ time }}", keyframes([
      style({
        opacity: "0",
        transform: "translate3d(0, {{ startY }}, 0)"
      }),
      style({
        opacity: "1",
        transform: "translate3d(0, {{ endY }}, 0)"
      })
    ])),
    { params: { time: DEFAULT_TIME, startY, endY } }
  )
}

export const FADE_IN_ANIMATION = fadeInX(0, 0);
export const FADE_IN_DOWN_ANIMATION = fadeInY("-100%", 0);
export const FADE_IN_DOWN_BIG_ANIMATION = fadeInY("-2000px", 0);
export const FADE_IN_LEFT_ANIMATION = fadeInX("-100%", 0);
export const FADE_IN_LEFT_BIG_ANIMATION = fadeInX("-2000px", 0);
export const FADE_IN_RIGHT_ANIMATION = fadeInX("100%", 0);
export const FADE_IN_RIGHT_BIG_ANIMATION = fadeInX("2000px", 0);
export const FADE_IN_UP_ANIMATION = fadeInY("100%", 0);
export const FADE_IN_UP_BIG_ANIMATION = fadeInY("2000px", 0);

