import { Injectable } from '@angular/core';
import { CartItems, WishingListItems } from '../Interfaces/Cart/Cart.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartWishingDataService {

  constructor() { }

  cartItems = new BehaviorSubject<CartItems[]>([]);
  wishingItems = new BehaviorSubject<WishingListItems[]>([]);

  cartItemsCount = new BehaviorSubject<number>(0);
  wishlistItemsCount = new BehaviorSubject<number>(0);


}
