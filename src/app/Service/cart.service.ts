import { Injectable, NgModule } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs/internal/Observable';

import { CartData, CartItems } from '../Interfaces/Cart/Cart.models';
import { HttpClient } from '@angular/common/http';
import { CustomerBasket } from '../Interfaces/Cart/Cart.models';
import { AuthService } from './auth.service';
import { EMPTY } from 'rxjs';
import { CartWishingDataService } from './cart-wishing-data.service';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = `${environment.apiBaseUrl}/Baskets/basket`;
  constructor( private http : HttpClient,private authService:AuthService) { 
  }
    getCart(): Observable<CustomerBasket> {
      if(!this.authService.IsAuthenticated())
        return EMPTY
      return this.http.get<CustomerBasket>(`${this.apiUrl}`); 

    }
  // New Services
  getCartProducts(): Observable<CartData> {

    if(!this.authService.IsAuthenticated())
        return EMPTY
    return this.http.get<CartData>(`${this.apiUrl}`);
  }

  addToCart(item: CartItems): Observable<CartData> {
    console.log(!this.authService.IsAuthenticated);
    console.log("thisauth");
    if(!this.authService.IsAuthenticated())
        return EMPTY
    console.log(item);
    return this.http.post<CartData>(`${this.apiUrl}`, item );
  }

  removeFromCart(itemId: number): Observable<void> {
    if(!this.authService.IsAuthenticated())
        return EMPTY
    return this.http.delete<void>(`${this.apiUrl}/${itemId}`);
  }

  
}
