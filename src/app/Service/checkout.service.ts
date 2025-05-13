import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeliveryMethods, OrderDto } from '../Interfaces/Checkout/checkout.models';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiUrl = `${environment.apiBaseUrl}`;
  constructor( private http : HttpClient) { 

  }
    CreateOrder(orderData : OrderDto) {
          return this.http.post(`${this.apiUrl}/Order`, orderData); 
  }

  GetDeliveryMehtods():Observable<DeliveryMethods[]> 
  {
     return this.http.get<DeliveryMethods[]>(`${this.apiUrl}/Order/DeliveryMethods`);
  }

  Credit() :Observable<any> {
    return this.http.post(`${this.apiUrl}/Payments`,{},    { responseType: 'text' as 'json' }
    );
      
  }
}
