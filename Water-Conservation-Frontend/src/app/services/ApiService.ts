import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiService {
    constructor(private httpClient: HttpClient) {
  }

  public get_vol_list(){
    return this.httpClient.get(`http://localhost:3000/volunteer/getVolunterList`);
    }

    adminLogin(post){
        let url = "http://localhost:3000/admin/login"
        return this.httpClient.post(url,post);
    }

    add_val(post){
        let url = "http://localhost:3000/volunteer/add_new_volunteer"
        return this.httpClient.post(url,post);
    }

    add_contact_us(post){
        let url = "http://localhost:3000/contact/add_new_contact"
        return this.httpClient.post(url,post);
    }

    add_issue(post){
        let url = "http://localhost:3000/issue/add_new_issue"
        return this.httpClient.post(url,post);
    }

    get_zones(){
        let url = "http://localhost:3000/admin/get_zones";
        return this.httpClient.get(url);
    }

    get_circle_by_zone(zone_id){
        let url = "http://localhost:3000/admin/get_circles"
        return this.httpClient.post(url,zone_id);
    }

    get_ward_by_circle(circle_id){
        let url = "http://localhost:3000/admin/get_wards"
        return this.httpClient.post(url,circle_id);
    }


}