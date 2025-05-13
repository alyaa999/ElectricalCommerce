import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = `${environment.apiBaseUrl}/Order`; 
  constructor(private httpclient:HttpClient) { 
  }

  GetCustomerOrders():Observable<any>{
    return this.httpclient.get(this.apiUrl)
  }

}
