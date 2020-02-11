import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { FADE_IN_OUT_ANIMATION } from "../../animations/basic/fadeInOut";

@Component({
  selector: "app-fade-in-out",
  templateUrl: "./fade-in-out.component.html",
  styleUrls: ["./fade-in-out.component.scss"],
  animations: [FADE_IN_OUT_ANIMATION]
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
