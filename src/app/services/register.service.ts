import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "content-type": "multipart/form-data"
    })
  };



  save(data): Promise<any> {
 
    let formData = new FormData();
    formData.append("image", data.logo);
    formData.append("type", data.type);
    formData.append("name", data.name);
    formData.append("address1", data.address1);
    formData.append("address2", data.address2);
    formData.append("color1", data.color1);
    formData.append("color2", data.color2);
    formData.append("email", data.email);
    formData.append("password", data.password);
    return this.http
      .post<any>(`http://localhost:3000/marketplace/register`,formData)
      .toPromise();
  }
  

}
