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

export const FADE_IN_ANIMATION = fadeInX(0, 0);
