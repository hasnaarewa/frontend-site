import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRegisterMarketplace from '../../../reducers/register-marketplace';
import { Observable, Subscription, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'site-middle-header',
  templateUrl: './middle-header.component.html',
  styleUrls: ['./middle-header.component.scss']
})

export class MiddleHeaderComponent implements OnInit {
  marketplace$: Observable<any>
  marketplaceinfo;
  logo='';
  private subscriptions: Subscription[];
  constructor(  private store: Store<fromRegisterMarketplace.State>) { 

    this.marketplace$ = this.store.pipe(select(fromRegisterMarketplace.Marketplace));
this.subscriptions=[]

  }

  ngOnInit(): void {
    this.subscriptions.push(this.marketplace$.pipe(
      concatMap(data => {

        return data ? from(this.setMarketplace(data)) : from([])
      })
    ).subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());

  }

  async setMarketplace(data){
    let p= new Promise((resolve, reject) => {
      this.marketplaceinfo=data
      this.setLogo()
      console.log(this.logo)
      resolve(true)
      
    })
    await p
    
  }
  setLogo(){
    this.logo= `http://localhost:3000/static/markteplaces/${this.marketplaceinfo.ref}/${this.marketplaceinfo.image}.jpeg`
  }
}
