import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';
import {ApiService } from '../services/ApiService';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  data:any;
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  result: any;
  result_data:any;
  fullscreen: boolean = false;
  logged_user: any; 
  imageUrls: (string | IImage)[] = [
    { url: 'assets/img/water-1.jpg', caption: ''},
    { url: 'assets/img/water-2.jpg', caption: ''},
    { url: 'assets/img/farmer-1.jpg', caption: ''},
    { url: 'assets/img/rain.jpeg', caption: ''},
    { url: 'assets/img/water-3.jpg', caption: ''},
    { url: 'assets/img/rainwater.jpg', caption: ''},
    { url: 'assets/img/water-4.jpg', caption: ''},
    { url: 'assets/img/farmer-2.jpg', caption: ''}
    // { url: 'assets/kitties.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];

  constructor(private api: ApiService) { 
    this.logged_user = localStorage.getItem("login_name");
    this.get_vol_list();
  }
    
  
  ngOnInit() {
  //   this.data = [{'name':'Anil', 'anil.singh581@gmail.com' :'ssd', 'age' :'34', 'city':'Noida, UP, India' },
  //   {name:'Anil', email :'anil.singh581@gmail.com', age :'34', city:'Noida' },
  //   {name:'Sunil', email :'anil.singh581@gmail.com', age :'34', city:'Noida' },
  //   {name:'Alok', email :'anil.singh581@gmail.com', age :'34', city:'Noida' },
  //   {name:'Tinku', email :'anil.singh581@gmail.com', age :'34', city:'Noida' },
  //   {name:'XYZ', email :'anil.singh581@gmail.com', age :'34', city:'Noida' },
  //   {name:'asas', email :'anil.singh581@gmail.com', age :'34', city:'Noida' },
  //   {name:'erer', email :'anil.singh581@gmail.com', age :'34', city:'Noida' },
  //   {name:'jhjh', email :'anil.singh581@gmail.com', age :'34', city:'Noida' }
  //  ]
  }


  get_vol_list(){
    this.api.get_vol_list().subscribe(
      data => {
        this.result = data;
        this.data = this.result.data;
      });
  }

}
