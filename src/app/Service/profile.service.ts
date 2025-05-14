import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService  {

  private apiUrl = `${environment.apiBaseUrl}/Accounts`; 

  constructor(private httpClient:HttpClient) { 

  }

  GetCustomerInfo():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/GetCurrentUser`)
  }
  GetCustomerAddress():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/Address`)
  }

  UpdateCustomerAddress(data:any):Observable<any>{
    return this.httpClient.put(`${this.apiUrl}/UpdateUserAddress`,data);
  }

}
