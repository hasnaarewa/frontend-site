import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRegisterMarketplace from '../reducers/register-marketplace';
import { Observable, Subscription, from } from 'rxjs';
import { IRegisterMarketplace } from 'src/app/models/register-marketplace';
import { ActivatedRoute } from '@angular/router';
import {RouterStateUrl,URL} from "../reducers"
import { concatMap } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  register$: Observable<IRegisterMarketplace>;
  url$:Observable<any>;
  path;
  private subscriptions: Subscription[];
  constructor(
    private storerouter: Store<RouterStateUrl>,
    private store: Store<fromRegisterMarketplace.State>
  ) {
    this.register$ = this.store.pipe(select(fromRegisterMarketplace.getRegisterData));
    this.url$ = this.store.pipe(select(URL));

    this.subscriptions = []
  }

  ngOnInit(): void {
    this.subscriptions.push(this.url$.pipe(
      concatMap(data => {

        return data ? from(this.setPath(data)) : from([])
      })
    ).subscribe());
    this.register$.subscribe((datat) => {
     
    })
 
  }
  async setPath(p){
    let prom=new Promise((resolve,reject)=>{
      this.path=p
   
      resolve(p)
    })
    
    await(prom)
    }
}
