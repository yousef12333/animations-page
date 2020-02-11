import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './attention-seekers.component.html',
  styleUrls: ['./attention-seekers.component.scss']
})
export class AttentionSeekersComponent implements OnInit {
  pageHeader: string = "Attention Seekers"
  constructor() { }

  ngOnInit(): void {
  }

}
