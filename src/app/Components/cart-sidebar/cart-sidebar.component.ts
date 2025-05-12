import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, Output, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../Service/cart.service';
import { CartItems, CartProduct } from '../../Interfaces/Cart/Cart.models';
import { CartWishingDataService } from '../../Service/cart-wishing-data.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-cart-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css'
})
export class CartSidebarComponent {
  @Input() isOpen = false;
  @Output() closeCart = new EventEmitter<void>();

  cartItems:CartItems[] = [];
  // total: number = 0;
  total : Signal<number> =computed(() => this.cart.cartItems().reduce((acc, item) => acc + (item.price * item.quantity), 0));
  constructor(public cart : CartWishingDataService) {}


  ngOnInit() {

    // this.cart.cartItems.subscribe(
    //   (data) => {
    //     this.cartItems = data;
    //     this.total = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    //   }
    // );

    // this.cart.getCartProducts().subscribe((data) => {
    //   this.cartItems = data.items;
    //   this.total = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    // });
  }

  close() {
    this.closeCart.emit();
  }
}
