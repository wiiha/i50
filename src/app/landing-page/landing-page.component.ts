import { Component, OnInit } from '@angular/core';

import { ContentServerService } from "../content/content-server.service";
import { NavbarStateService } from "../navbar/navbar-state.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  // lpItems = landingPageItems;

  constructor(public cp: ContentServerService, private nss:NavbarStateService) { }

  ngOnInit() {
    // console.log(this.cp.getAllContent());
    // this.cp.getItemByPath("ddd");
    this.nss.setshowBar(false);
  }

}
