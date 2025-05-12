import { Injectable, signal } from '@angular/core';
import { CartItems, WishingListItems } from '../Interfaces/Cart/Cart.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartWishingDataService {

  constructor() { }

  cartItems = signal<CartItems[]>([]);
  wishingItems = signal<WishingListItems[]>([]);

  cartItemsCount = signal<number>(0);
  wishlistItemsCount = signal<number>(0);


}
