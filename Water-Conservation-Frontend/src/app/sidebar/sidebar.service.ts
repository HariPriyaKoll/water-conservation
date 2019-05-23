import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  public name = new BehaviorSubject<object>({"name":"User","status":""});
  role:any;
  menus = [
    {
      title: 'General',
      type: 'header'
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'simple'
    },
    {
      title: 'Enroll',
      icon: 'fa fa-user-plus',
      active: false,
      type: 'simple'
    },
    {
      title: 'Admin Login',
      icon: 'fa fa-user',
      active: false,
      type: 'simple'
    },
    {
      title: 'Events',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple'
    },
    {
      title: 'Miscellaneous',
      type: 'header'
    },
    {
      title: 'About US',
      icon: 'fa fa-book',
      active: false,
      type: 'simple'
    },
    {
      title: 'Gallery',
      icon: 'fa fa-image',
      active: false,
      type: 'simple'
    },
    {
      title: 'Social Wall',
      icon: 'fa fa-share-square',
      active: false,
      type: 'simple'
    },
    {
      title: 'Contact US',
      icon: 'fa fa-envelope',
      active: false,
      type: 'simple'
    },
    {
      title: 'Report Issue',
      icon: 'fa fa-bug',
      active: false,
      type: 'simple'
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
  userName(data){
  //  this.name=name;
   console.log("name",data);
   this.name.next(data);
  }

  
   
}
