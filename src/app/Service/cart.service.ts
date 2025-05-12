import { Injectable, NgModule } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs/internal/Observable';

import { CartData, CartItems } from '../Interfaces/Cart/Cart.models';
import { HttpClient } from '@angular/common/http';
import { CustomerBasket } from '../Interfaces/Cart/Cart.models';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = `${environment.apiBaseUrl}/Baskets/basket`;
  constructor( private http : HttpClient) { 
  }
    getCart(): Observable<CustomerBasket> {
      return this.http.get<CustomerBasket>(`${this.apiUrl}`); 

    }
  // New Services
  getCartProducts(): Observable<CartData> {
    return this.http.get<CartData>(`${this.apiUrl}`);
  }

  addToCart(item: CartItems): Observable<CartData> {
    return this.http.post<CartData>(`${this.apiUrl}`, { item });
  }

  removeFromCart(itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${itemId}`);
  }

  
}
