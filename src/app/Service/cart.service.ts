import { Injectable, NgModule } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs/internal/Observable';

import { Cart, CartData, CartItems } from '../Interfaces/Cart/Cart.models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CartService {
   
  private apiUrl = `${environment.apiBaseUrl}/Baskets/basket`; 
  constructor( private http : HttpClient) { 
  }

  getCart(): Observable<Cart> {
          return this.http.get<Cart>(`${this.apiUrl}`); 
  }

  // New Services
  



  getCartProducts(): Observable<CartData> {
    return this.http.get<CartData>(`${this.apiUrl}`);
  }

  addToCart(item: CartItems): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}`, { item });
  }

  removeFromCart(itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${itemId}`);
  }

}
