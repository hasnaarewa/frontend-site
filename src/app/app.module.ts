import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {RegisterMarketplaceEffects} from './effects/register-marketplace'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomRouterStateSerializer, reducers } from './reducers';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { AccountComponent } from './components/account/account.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot(reducers, { 
      initialState: {
       
      }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx HNC DevTools',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ RegisterMarketplaceEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
