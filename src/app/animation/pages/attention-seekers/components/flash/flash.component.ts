import { Component, OnInit } from '@angular/core';
import { FLASH_ANIMATION } from "../../../../animations/basic/flash";

@Component({
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss'],
  animations: [FLASH_ANIMATION]
})
export class FlashComponent implements OnInit {
  animationName = "Flash";
  flashState = "start";
  constructor() { }

  ngOnInit(): void {
  }

  toggleAnimation() {
    this.flashState = this.flashState === "start" ? "end" : "start";
  }
}
