import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import {SiteComponent}  from './site.component'
import { Routes, RouterModule } from '@angular/router';
import {MarketplaceSiteComponents} from '../components/marketplace-site-component.module'

import { CarouselModule } from 'ngx-owl-carousel-o';

const siteRoutes: Routes = [
  {
    path: '',
    component: SiteComponent
  }];

@NgModule({
  declarations: [SiteComponent],
  imports: [
    CommonModule,
 
    MarketplaceSiteComponents,
    RouterModule.forChild(siteRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeMarketplace { }
