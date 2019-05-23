import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
// import { MenusService } from './menus.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  menus = [];
  logged_user: any;
  role: any;
  login_status:any;
  constructor(public sidebarservice: SidebarService) {   
    this.menus = sidebarservice.getMenuList();
   }

  ngOnInit() {
    this.sidebarservice.name.subscribe(data => this.setuserDetails(data));
  }
  setuserDetails(userData){
    console.log("userData",userData);
    this.logged_user=userData.name;
    this.login_status =userData.status;
    if(this.login_status == 'yes'){
      this.role = 'Administrator';
    }else if(this.login_status=='no'){
      this.role = 'Volunteer';
    }
    else{
      this.role = '';
    }
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }
  logout(){
    alert("Log out Successfuly");
    window.location.reload();
    localStorage.removeItem("login_status");
    localStorage.removeItem("login_name");
    localStorage.setItem("login_status","No");
    localStorage.setItem("login_name","User");
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }

}
