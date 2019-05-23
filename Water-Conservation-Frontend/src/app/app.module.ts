import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {SlideshowModule} from 'ng-simple-slideshow';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EnrollComponent } from './enroll/enroll.component';
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SocialWallComponent } from './social-wall/social-wall.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/ApiService';
import { ReportIssueComponent } from './report-issue/report-issue.component';
import {DataTableModule} from "angular-6-datatable";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
    ReportIssueComponent,
    SidebarComponent,
    DashBoardComponent,
    EnrollComponent,
    EventsComponent,
    AboutUsComponent,
    GalleryComponent,
    SocialWallComponent,
    ContactUsComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataTableModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    SlideshowModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [ApiService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
