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
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-animations";
}
