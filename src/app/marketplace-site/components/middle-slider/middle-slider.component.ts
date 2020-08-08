import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'
@Component({
  selector: 'site-middle-slider',
  templateUrl: './middle-slider.component.html',
  styleUrls: ['./middle-slider.component.scss']
})
export class MiddleSliderComponent implements OnInit {
  images = [
    {path: '../../../assets/images/s3-1.jpg'},
    {path: '../../../assets/images/s3-1.jpg'},
    
]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      900: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
