import { Component, OnInit } from '@angular/core';
import * as fromRegisterMarketplace from '../../reducers/register-marketplace';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { LoadMarketplaceCategory } from 'src/app/actions/marketplace';
@Component({
  selector: 'site-home',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  errors$: Observable<any>
  marketplace$: Observable<any>
  marketplaceinfo
  private subscriptions: Subscription[];
  constructor(    private store: Store<fromRegisterMarketplace.State>) { 
    this.errors$ = this.store.pipe(select(fromRegisterMarketplace.getErrors));

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
  doLoad(){
    console.log("load..")
    this.store.dispatch(new LoadMarketplaceCategory(this.marketplaceinfo.ref))

  }
  async setMarketplace(data){
    let p= new Promise((resolve, reject) => {
      this.marketplaceinfo=data
      this.doLoad()
      resolve(true)
      
    })
    await p
    
  }

}
