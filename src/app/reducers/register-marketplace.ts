import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { MarketplaceActionTypes, MarketplaceActions } from '../actions/marketplace';
import { IRegisterMarketplace } from '../models/register-marketplace'
export interface State {
  loading: boolean;
  error: any;
  register: IRegisterMarketplace;
  response: any,
  marketplace:any,
  category:any
}

export const initialState: State = {
  loading: false,
  error: null,
  register: <IRegisterMarketplace>{
    step:1,
    percent:0,
    data:{}
  },
  response: null,
  marketplace:null,
  category:null
};

export function reducer(
  state = initialState,
  action: MarketplaceActions,
): State {
  switch (action.type) {
    case MarketplaceActionTypes.RegisterMarketplace: {
      return {
        ...state,
        loading: true,
      };
    }
    case MarketplaceActionTypes.LoadMarketplaceCategory: {
      return {
        ...state,
        loading: true,
      };
    }
    case MarketplaceActionTypes.RegisterMarketplaceSuccess: {
      return {
        ...state,
        loading: false,
        response: action.payload,
        error: null,
      };
    }

    case MarketplaceActionTypes.RegisterMarketplaceSaveStep1: {
      let _=state.register
      _.data.type=action.payload
      _.step+=1
      _.percent+=20
      console.log("this ",_);
      return {
        ...state,
        loading: false,
        register: _,
        error: null,
      };
    }
    case MarketplaceActionTypes.RegisterMarketplaceSaveStep2: {
      let _=state.register
      _.data.name=action.payload.name
      _.data.address1=action.payload.address1
      _.data.address2=action.payload.address2
      
      _.step+=1
      _.percent+=20
      return {
        ...state,
        loading: false,
        register: _,
        error: null,
      };
    }
    case MarketplaceActionTypes.RegisterMarketplaceSaveStep3: {
      let _=state.register
      _.data.color1=action.payload.color1
      _.data.color2=action.payload.color2
      _.data.logo=action.payload.logo
      
      _.step+=1
      _.percent+=20
      return {
        ...state,
        loading: false,
        register: _,
        error: null,
      };
    }
    case MarketplaceActionTypes.RegisterMarketplaceSaveStep4: {
      let _=state.register
      _.data.email=action.payload.email
      _.data.password=action.payload.password
  
      _.percent=100
      return {
        ...state,
        loading: false,
        register: _,
        error: null,
      };
    }
    case MarketplaceActionTypes.RegisterMarketplaceDecrement: {
      let _=state.register

      _.step-=1
      _.percent-=20
      return {
        ...state,
        loading: false,
        register: _,
        error: null,
      };
    }
    
    case MarketplaceActionTypes.RegisterMarketplaceFail: {
        console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload.error ?action.payload.error.message:action.payload,
      };
    }
    case MarketplaceActionTypes.LoadMarketplaceSuccess: {

    return {
      ...state,
      loading: false,
      marketplace: action.payload
    };
  }
  case MarketplaceActionTypes.LoadMarketplaceCategorySuccess: {

    return {
      ...state,
      loading: false,
      category: action.payload
    };
  }
    default: 
      return state;
    
  }
}

export const getRegisterState = createFeatureSelector<State>('registermarketplace');
export const getRegister = (state: State) => state.register;
export const getRegisterStep = (state: State) => state.register.step;
export const getResponse = (state: State) => state.response;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getMarketplace = (state: State) => state.marketplace;
export const getCategory = (state: State) => state.category;

export const getRegisterData = createSelector(getRegisterState, getRegister);
export const getStep = createSelector(getRegisterState, getRegisterStep);
export const isLoading = createSelector(getRegisterState, getLoading);
export const getErrors = createSelector(getRegisterState, getError);
export const Response = createSelector(getRegisterState, getResponse);
export const Marketplace = createSelector(getRegisterState, getMarketplace);
export const Category = createSelector(getRegisterState, getCategory);
