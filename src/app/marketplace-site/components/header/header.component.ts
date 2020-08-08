import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRegisterMarketplace from '../../../reducers/register-marketplace';
import { Observable, Subscription, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDDActive=false
  category$: Observable<any>
  constructor(  private store: Store<fromRegisterMarketplace.State>) { 
    this.category$ = this.store.pipe(select(fromRegisterMarketplace.Category));

  }

  ngOnInit(): void {
  }

  setActiveMenu(){
    this.isDDActive=!this.isDDActive
  }
}
