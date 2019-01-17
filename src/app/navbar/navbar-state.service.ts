import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarStateService {
  private showNavBar = new BehaviorSubject<boolean>(false);

  constructor() { }

  setshowBar(bool: boolean) {
    this.showNavBar.next(bool);
  }
  getshowBar() {
    return this.showNavBar.asObservable();
  }
}
