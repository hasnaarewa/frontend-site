import { Action } from '@ngrx/store';
import { IRegisterMarketplace } from '../models/register-marketplace';



export enum MarketplaceActionTypes {
  RegisterMarketplace = '[RegisterMarketplace] RegisterMarketplace',

  RegisterMarketplaceSaveStep1 = '[RegisterMarketplace] RegisterMarketplaceSaveStep1',
  RegisterMarketplaceSaveStep2 = '[RegisterMarketplace] RegisterMarketplaceSaveStep2',
  RegisterMarketplaceSaveStep3 = '[RegisterMarketplace] RegisterMarketplaceSaveStep3',
  RegisterMarketplaceSaveStep4 = '[RegisterMarketplace] RegisterMarketplaceSaveStep4',
  RegisterMarketplaceDecrement = '[RegisterMarketplace] RegisterMarketplaceDecrement',
  RegisterMarketplaceSuccess = '[RegisterMarketplace] RegisterMarketplace Success',
  RegisterMarketplaceFail = '[RegisterMarketplace] RegisterMarketplace Fail',
  LoadMarketplace = '[RegisterMarketplace] LoadMarketplace',
  LoadMarketplaceCategory = '[RegisterMarketplace] LoadMarketplaceCategory',
  LoadMarketplaceCategorySuccess = '[RegisterMarketplace] LoadMarketplaceCategorySuccess',
  LoadMarketplaceSuccess = '[RegisterMarketplace] LoadMarketplace Success',
  LoadMarketplaceFail = '[RegisterMarketplace] LoadMarketplace',
}

export class RegisterMarketplace implements Action {
  readonly type = MarketplaceActionTypes.RegisterMarketplace;
  constructor(public payload: any) { 
console.log("here..");

  }
}

export class LoadMarketplace implements Action {
  readonly type = MarketplaceActionTypes.LoadMarketplace;
  constructor(public payload: any) { }
}
export class LoadMarketplaceCategory implements Action {
  readonly type = MarketplaceActionTypes.LoadMarketplaceCategory;
  constructor(public payload: any) { }
}
export class LoadMarketplaceCategorySuccess implements Action {
  readonly type = MarketplaceActionTypes.LoadMarketplaceCategorySuccess;
  constructor(public payload: any) { }
}
export class LoadMarketplaceSuccess implements Action {
  readonly type = MarketplaceActionTypes.LoadMarketplaceSuccess;
  constructor(public payload: any) { }
}
export class RegisterMarketplaceSaveStep4 implements Action {
  readonly type = MarketplaceActionTypes.RegisterMarketplaceSaveStep4;
  constructor(public payload: any) { }
}
export class RegisterMarketplaceSaveStep3 implements Action {
  readonly type = MarketplaceActionTypes.RegisterMarketplaceSaveStep3;
  constructor(public payload: any) { }
}
export class RegisterMarketplaceSaveStep2 implements Action {
  readonly type = MarketplaceActionTypes.RegisterMarketplaceSaveStep2;
  constructor(public payload: any) { }
}
export class RegisterMarketplaceSaveStep1 implements Action {
  readonly type = MarketplaceActionTypes.RegisterMarketplaceSaveStep1;
  constructor(public payload: any) { }
}
export class RegisterMarketplaceDecrement implements Action {
  readonly type = MarketplaceActionTypes.RegisterMarketplaceDecrement;
  constructor() { }
}
export class RegisterMarketplaceSuccess implements Action {
  readonly type = MarketplaceActionTypes.RegisterMarketplaceSuccess;
  constructor(public payload: any) { }
}

export class RegisterMarketplaceFail implements Action {
  readonly type = MarketplaceActionTypes.RegisterMarketplaceFail;
  constructor(public payload: any) { }
}


export type MarketplaceActions = RegisterMarketplace|LoadMarketplace|LoadMarketplaceSuccess | RegisterMarketplaceDecrement |RegisterMarketplaceSaveStep1 | RegisterMarketplaceSaveStep1
 | RegisterMarketplaceSuccess |LoadMarketplaceCategory|LoadMarketplaceCategorySuccess| RegisterMarketplaceFail |RegisterMarketplaceSaveStep2 |RegisterMarketplaceSaveStep3|RegisterMarketplaceSaveStep4