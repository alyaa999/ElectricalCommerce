import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import{OrderDetail, OrderIndex, RawOrder}from'../Interfaces/Orders/Order.models'



@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = `${environment.apiBaseUrl}/Order`; 
  constructor(private httpclient:HttpClient) { 
  }

GetCustomerOrders():Observable<OrderIndex[]>{
  return this.httpclient.get<RawOrder[]>(this.apiUrl).pipe(
      map( orders=>
        orders.map(order=>( {
          id:order.id,
          date:order.orderDate,
          cntItems:order.items.length,
          status:order.status,
          totalCost:order.total,
        }))
      )
    )
  }
  GetCustomerOrderDetail(id:any):Observable<OrderDetail>{
    return this.httpclient.get<OrderDetail>(`${this.apiUrl}/${id}`)
  }
}
