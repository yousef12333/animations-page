import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-fade-in-out",
  templateUrl: "./fade-in-out.component.html",
  styleUrls: ["./fade-in-out.component.scss"],
  animations: [
    trigger("fadeInOut", [
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
    ])
  ]
})
export class FadeInOutComponent implements OnInit {
  list = [];
  animationName = "Fade In-Out";
  constructor() {}

  ngOnInit(): void {}

  addListItem() {
    const item = { title: "abc", body: "Hello chum" };
    this.list.push(item);
  }

  removeListItem() {
    this.list.pop();
  }
}
