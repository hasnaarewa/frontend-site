import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { ColorBlockModule } from 'ngx-color/block'; // <color-block></color-block>
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component'
import { TopheaderComponent } from './topheader/topheader.component';
import { MiddleHeaderComponent } from './middle-header/middle-header.component';
import { MiddleSliderComponent } from './middle-slider/middle-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OffersComponent } from './offers/offers.component';
import { LatestComponent } from './latest/latest.component';



@NgModule({
  imports: [
    CarouselModule,
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    
    RouterModule,
    FormsModule,
    ColorBlockModule,
    ReactiveFormsModule,
    
  ],
  exports: [HeaderComponent,FooterComponent,TopheaderComponent,MiddleHeaderComponent,MiddleSliderComponent,OffersComponent,LatestComponent ],
  declarations: [HeaderComponent,FooterComponent,TopheaderComponent,MiddleHeaderComponent,MiddleSliderComponent,OffersComponent,LatestComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MarketplaceSiteComponents { }
