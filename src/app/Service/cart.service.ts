import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs/internal/Observable';

import { HttpClient } from '@angular/common/http';
import { CustomerBasket } from '../Interfaces/Cart/Cart.models';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = `${environment.apiBaseUrl}Baskets/basket`;
  constructor( private http : HttpClient) { 

  }
    getCart(): Observable<CustomerBasket> {
      return this.http.get<CustomerBasket>(`${this.apiUrl}`); 
  }

  
}
