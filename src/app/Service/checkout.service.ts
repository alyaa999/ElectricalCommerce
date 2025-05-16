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
    CreateOrder(orderData : OrderDto) :Observable<OrderDto> {
          return this.http.post<OrderDto>(`${this.apiUrl}/Order`, orderData); 
  }
  DeleteOrder(id: string  | null) {
    return this.http.delete(`${this.apiUrl}/Order?id=${id}`);
  }
  
  UpdateorderStatus(id: string | null) {
    const numericId = Number(id);
    return this.http.get(`${this.apiUrl}/Order/UpdateorderStatus?id=${numericId}`);
  }
  

  GetDeliveryMehtods():Observable<DeliveryMethods[]> 
  {
     return this.http.get<DeliveryMethods[]>(`${this.apiUrl}/Order/DeliveryMethods`);
  }

  Credit(orderId :number ) :Observable<any> {
    return this.http.post(`${this.apiUrl}/Payments/create-checkout-session?orderId=${orderId}` , {});
    
      
  }
}
