import { animation, animate, keyframes, style, query, trigger, transition, animateChild, group, useAnimation } from "@angular/animations";

// export const ROUTER_ANIMATIONS =
//   trigger("routeFadeIn", [
//     transition("attentionSeekers => *", [
//       style({ position: "relative" }),
//       group([
//         // when entering and leaving page
//         query(":enter, :leave", [
//           // default style for :enter and :leave
//           style({
//             position: "absolute",
//             left: "0",
//             width: "100%",
//             opacity: "0",
//             transform: "scale(0) translateY(100%)"
//           })
//         ], { optional: true }),
//         // animate only when entering the page
//         query(":enter", [
//           style({ left: "100%" }),
//           animate("600ms ease", style({
//             opacity: "1", transform: "scale(0) translateY(0)"
//           }))
//         ], { optional: true })
//       ])
//     ])
//   ]);;

const routeFadeIn = animation([
  // set initiial position of outlet and pages involved
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      width: "100%",
      top: "0",
      right: "0"
    })
  ]),
  query(":enter", style({
    right: "-100%",
    opacity: "0"
  })),
  query(":leave", animateChild()),
  group([
    query(":leave", [
      animate("300ms ease-in",
        style({ right: "100%", opacity: "0" })
      )
    ]),
    query(":enter", [
      animate("300ms ease-in",
        style({ right: "0", opacity: "1" })
      )
    ])
  ]),
  query(":leave", animateChild())
]);;
// export const ROUTE_FADE_IN_ANIMATION =
//   trigger('routeFadeIn', [
//     transition("* => attentionSeeker", [
//       transition(":enter", [
//         // styles at start of transition
//         style({ opacity: "0" }),

//         // styles at end of transition
//         animate("10s", style({ opacity: "1" }))
//       ])
//     ])
//   ]);

export const ROUTER_ANIMATIONS = trigger("routerAnimations", [
  transition("attentionPage => *", useAnimation(routeFadeIn))
]);
