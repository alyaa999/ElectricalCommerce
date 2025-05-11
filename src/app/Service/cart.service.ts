import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs/internal/Observable';

import { Cart, CartProduct } from '../Interfaces/Cart/Cart.models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CartService {

  private apiUrl = `${environment.apiBaseUrl}/Cart/viewCartProducts`;
  constructor( private http : HttpClient) {

  }
    getCart(): Observable<Cart> {
          return this.http.get<Cart>(`${this.apiUrl}`);
  }

}
