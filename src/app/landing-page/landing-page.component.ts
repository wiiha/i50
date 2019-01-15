import { Component, OnInit } from '@angular/core';
import { landingPageItems } from "./landing-page-content";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  lpItems = landingPageItems;

  constructor() { }

  ngOnInit() {
    console.log(this.lpItems);
    
  }

}
