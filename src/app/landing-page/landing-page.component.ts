import { Component, OnInit } from '@angular/core';

import { ContentServerService } from "../content/content-server.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  // lpItems = landingPageItems;

  constructor(public cp: ContentServerService) { }

  ngOnInit() {
    // console.log(this.cp.getAllContent());
    this.cp.getItemByPath("ddd");

  }

}
