import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {


  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "content-type": "multipart/form-data"
    })
  };



  checkMarketplace(id){

    return this.http
      .get<any>(`http://localhost:3000/marketplace/${id}/status`)
   
  }
  getCategory(ref): Promise<any> {
    return this.http
    .get<any>(`http://localhost:3000/marketplace/${ref}/category`)
    .toPromise()
  }
  

}
