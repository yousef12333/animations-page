import { Component } from "@angular/core";
import {
  style,
  state,
  transition,
  trigger,
  animate
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
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
export class AppComponent {
  title = "angular-animations";
  list = [];

  addListItem() {
    const item = { title: "abc", body: "Hello chum" };
    this.list.push(item);
  }

  removeListItem() {
    this.list.pop();
  }
}
