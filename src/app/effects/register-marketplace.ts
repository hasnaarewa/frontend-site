import { Inject, Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { combineLatest, Observable, of, from } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { MarketplaceActionTypes ,RegisterMarketplace, RegisterMarketplaceSaveStep4, RegisterMarketplaceSuccess, RegisterMarketplaceFail, LoadMarketplaceCategorySuccess, LoadMarketplaceCategory} from '../actions/marketplace';
import {RegisterService} from '../services/register.service'
import { MarketplaceService } from '../services/marketplace.service';


@Injectable()
export class RegisterMarketplaceEffects {
  constructor(private actions$: Actions,private registerService:RegisterService,
    private marketplaceService:MarketplaceService) {
 

  }

  @Effect()
  register$: Observable<Action> = this.actions$.pipe(
    ofType(MarketplaceActionTypes.RegisterMarketplace),
    map((action: RegisterMarketplace) => action.payload),
    mergeMap((data:any) =>
    from(this.registerService.save(data))
    .pipe(
      mergeMap((result:any) => of<Action>(new RegisterMarketplaceSuccess(result))),
      catchError(error => of(new RegisterMarketplaceFail(error)))
    )
    )
  );

  @Effect()
  category$: Observable<Action> = this.actions$.pipe(
    ofType(MarketplaceActionTypes.LoadMarketplaceCategory),
    map((action: LoadMarketplaceCategory) => action.payload),
    mergeMap((id:any) =>
    from(this.marketplaceService.getCategory(id))
    .pipe(
      mergeMap((result:any) => of<Action>(new LoadMarketplaceCategorySuccess(result))),
      catchError(error => of(new RegisterMarketplaceFail(error)))
    )
    )
  );
}
