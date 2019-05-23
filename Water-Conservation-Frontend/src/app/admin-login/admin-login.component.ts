import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import {ApiService } from '../services/ApiService';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';
import { SidebarService } from 'src/app/sidebar/sidebar.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  contactForm: FormGroup;
  result:any;
  private msgAlert: "This field required";
  
  constructor(public sidebarservice: SidebarService,public router: Router,private fb: FormBuilder,private api: ApiService) {
    this.contactForm = this.fb.group({
      admin_user: [null, Validators.required],
      password: [null, Validators.required]
    });
    // localStorage.setItem("login_status","No");
    // localStorage.setItem("login_name","User");
   }

  ngOnInit() {
  }


  submitForm(post) {
    this.api.adminLogin(post).subscribe(
      data => {
        this.result = data
          if (this.result.success == true) {
              alert('Login Successfully');             
             let userData={
               "name":this.result.username,
               "status":"yes"
             };
             this.sidebarservice.userName(userData);
             this.router.navigateByUrl('Dashboard'); 
          }
      },
      err =>{
          if (err.success!=true) {
              alert('Invalid Ceredentials');
          }
      }
    );
  }

}
