import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MarketplaceService } from '../services/marketplace.service';
import { catchError, map } from 'rxjs/operators';
import * as fromRegisterMarketplace from '../reducers/register-marketplace';
import { Store } from '@ngrx/store';
import { LoadMarketplaceSuccess } from '../actions/marketplace';

@Injectable({
  providedIn: 'root'
})
export class CanaccessGuard implements CanActivate {
  constructor(public marketplaceService: MarketplaceService,
    public router:Router,
    public  store: Store<fromRegisterMarketplace.State>,) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.marketplaceService.checkMarketplace(next.params.id).pipe(
      map(data=>{
        this.store.dispatch(new LoadMarketplaceSuccess(data))
        return !!data
      }),
      catchError(()=>{
        this.router.navigate(['/']);
        return of(false)
      })
    )
  }

}
