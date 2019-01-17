import { Component, OnInit } from '@angular/core';
import { NavbarStateService } from "./navbar-state.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showNavBar:boolean = true;
  
  constructor(private nss:NavbarStateService) { }

  ngOnInit() {
    this.nss.getshowBar().subscribe(show => {
      console.log(show);
      this.showNavBar = show;
    })
    
  }

}
