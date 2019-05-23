import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EnrollComponent } from './enroll/enroll.component';
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SocialWallComponent } from './social-wall/social-wall.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReportIssueComponent } from './report-issue/report-issue.component';
const routes: Routes = [
  {path:'',redirectTo:'Dashboard',pathMatch:'full'},
  {path:'Dashboard',component:DashBoardComponent},
  {path:'Enroll',component:EnrollComponent},
  {path:'Events',component:EventsComponent},
  {path:'About US',component:AboutUsComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'Social Wall',component:SocialWallComponent},
  {path:'Contact US',component:ContactUsComponent},
  {path:'Admin Login',component:AdminLoginComponent},
  {path:'Report Issue',component:ReportIssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
