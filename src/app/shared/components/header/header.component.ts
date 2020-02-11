import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() pageHeader: string;
  constructor() { }

  ngOnInit(): void {
  }

}
