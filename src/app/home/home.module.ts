import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentsModule } from '../components/homeComponentsModule';
import { MarketplaceRegisterComponent } from '../components/marketplace-register/marketplace-register.component';
const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'generator',
        component: MarketplaceRegisterComponent}]
  }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeComponentsModule,
    RouterModule.forChild(homeRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
