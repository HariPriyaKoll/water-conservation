import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import {ApiService } from '../services/ApiService';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.scss']
})
export class ReportIssueComponent implements OnInit {
  contactForm: FormGroup;
  result:any;
  zones:any;
  zones_data: any;
  circles: any;
  circles_data: any;
  wards:any;
  wards_data: any;
  private msgAlert: "This field required";
  constructor(public router: Router,private fb: FormBuilder,private api: ApiService) { 
    this.contactForm = this.fb.group({
      user_name: [null, Validators.required],
      mobile_number: [null, Validators.required],
      issue: [null, Validators.required],
      zone_id: [null, Validators.required],
      circle_id: [null, Validators.required],
      ward_id: [null, Validators.required],
      file_upload: [null, Validators.required]
    });
    this.get_zones();
  }

  ngOnInit() {
  }

  get_zones(){
    this.api.get_zones().subscribe(
      data => {
        this.zones_data = data;
        this.zones = this.zones_data.data;
      });
  }

  get_circles(id){
    let req_data = {"zone_id":id};
    this.api.get_circle_by_zone(req_data).subscribe(
      data => {
        this.circles_data = data;
        this.circles = this.circles_data.status;
      });
  }

  get_wards(id){
    let req_data = {"circle_id":id};
    this.api.get_ward_by_circle(req_data).subscribe(
      data => {
        this.wards_data = data;
        this.wards = this.wards_data.status;
      });
  }

  submitForm(post) {
    this.api.add_issue(post).subscribe(
      data => {
        this.result = data
          if (this.result.success == true) {
              alert('Form Submitted Successfully'); 
             this.router.navigateByUrl('Dashboard');
          }
      },
      err =>{
          if (err.success!=true) {
              alert('Internal Server error');
          }
      }
    );
  }

}
