import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import {ApiService } from '../services/ApiService';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  result:any;
  private msgAlert: "This field required";
  constructor(public router: Router,private fb: FormBuilder,private api: ApiService) { 
    this.contactForm = this.fb.group({
      username: [null, Validators.required],
      mobile_number: [null, Validators.required],
      email_id: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  ngOnInit() {
  }


  submitForm(post) {
    this.api.add_contact_us(post).subscribe(
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
