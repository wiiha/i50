import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from "rxjs/operators";

import { ContentServerService } from "../content/content-server.service";
import { NavbarStateService } from "../navbar/navbar-state.service";

@Component({
  selector: 'app-present-page',
  templateUrl: './present-page.component.html',
  styleUrls: ['./present-page.component.scss']
})
export class PresentPageComponent implements OnInit {

  pageItem = undefined;

  constructor(private router: Router,
    private cp: ContentServerService,
    private nss: NavbarStateService) {

    router.events.pipe( //keeping track of route changes to update content of page.
      filter(e => e instanceof NavigationEnd)
    ).subscribe(e => {
      this.routeChanged();
    });

  }

  ngOnInit() {
    this.nss.setshowBar(true);
    this.updateContent();
  }
  
  routeChanged(){
    this.updateContent();
  }

  updateContent() {
    // console.log("url: " + this.router.url);
    // const pathRegex = /\/page\/.+/g;
    const path = this.router.url.split("/")[2];
    // console.log(path);
    this.pageItem = this.cp.getItemByPath(path);
    // console.log(this.pageItem);
    if (!this.pageItem) {
      console.log("RETURN TO HOME");
      this.router.navigate(['/']);
    }

  }

}
