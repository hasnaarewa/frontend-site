import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MarketplaceRegisterComponent } from './marketplace-register/marketplace-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { ColorBlockModule } from 'ngx-color/block'; // <color-block></color-block>
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ColorBlockModule,
    ReactiveFormsModule,
  ],
  exports: [MarketplaceRegisterComponent,HeaderComponent,FooterComponent ],
  declarations: [MarketplaceRegisterComponent,HeaderComponent,FooterComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponentsModule { }
