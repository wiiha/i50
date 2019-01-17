import { Injectable } from '@angular/core';
import { pageItems } from "./page-content";

@Injectable({
  providedIn: 'root'
})
export class ContentServerService {

  pageItemsObjArr = pageItems;

  constructor() { }

  getAllContent() {
    return this.pageItemsObjArr;
  }

  getItemByPath(path: string) {

    for (let index = 0; index < this.pageItemsObjArr.length; index++) {
      const item = this.pageItemsObjArr[index];
      
      if (item.page === path) {
        console.log("(getItemByPath) Returning: ",item);
        return item;
      }
    }
    console.log("(getItemByPath) did not find match for: " + path);
    return undefined;
  }

  getItemsAsMenu(){
    var pages = [];
    this.pageItemsObjArr.forEach(item => {
      if (item.page) {
        pages.push({"title": item.title, "page":item.page});
      }
    })
    return pages;
  }

}
