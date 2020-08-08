import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Subscription, from, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import {RouterStateUrl,URL} from "../../reducers"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path;
  url$:Observable<any>;
  private subscriptions: Subscription[];
  constructor(  private store: Store<RouterStateUrl>) {
    this.url$ = this.store.pipe(select(URL));

 this.subscriptions=[]
   }

  ngOnInit() {
    this.subscriptions.push(this.url$.pipe(
      concatMap(data => {

        return data ? from(this.setPath(data)) : from([])
      })
    ).subscribe());

    
 
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());

  }
  async setPath(p){
  let prom=new Promise((resolve,reject)=>{
    this.path=p
  
    resolve(p)
  })
  
  await(prom)
  }

}
