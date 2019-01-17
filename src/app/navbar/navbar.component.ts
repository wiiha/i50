import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { NavbarStateService } from "./navbar-state.service";
import { ContentServerService } from "../content/content-server.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showNavBar:boolean = true;
  navBarCollapsed = true;
  
  constructor(private nss:NavbarStateService, public cp:ContentServerService) { }

  ngOnInit() {
    this.nss.getshowBar().subscribe(show => {
      // console.log(show);
      this.showNavBar = show;
    })
    
  }
  test(){
    console.log("link clicked!");
    
  }

  toggleNavBarCollapsed(){
    this.navBarCollapsed = !this.navBarCollapsed;
  }

  setNavBarCollapsed(val:boolean){
    console.log("link clicked!");
    this.navBarCollapsed = val;
  }

}
