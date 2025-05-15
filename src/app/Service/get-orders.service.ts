import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardOrderDetail } from '../Interfaces/Orders/Order.models';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class GetOrdersService {

  constructor(private http: HttpClient) { }

  public getAllOrders(): Observable<DashboardOrderDetail[]> {
    return this.http.get<DashboardOrderDetail[]>(`${environment.apiBaseUrl}/Order/GetAllOrders`);
  }

}
