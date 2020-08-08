import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateSerializer } from '@ngrx/router-store';

import * as fromRegisterMarketplace from './register-marketplace'
export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;
    return { url, params, queryParams };
  }
}

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  registermarketplace: fromRegisterMarketplace.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  registermarketplace: fromRegisterMarketplace.reducer
};
export const getURl = (state: any) => {

  console.log(state.state)
  return state.state.url
};
export const getRouterState = createFeatureSelector<RouterStateUrl>('router');

export const URL = createSelector(getRouterState, getURl);
