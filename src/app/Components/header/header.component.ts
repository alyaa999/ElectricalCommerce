import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartSidebarComponent } from "../cart-sidebar/cart-sidebar.component";

@Component({
  selector: 'app-header',
  imports: [RouterModule, CartSidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleCart = new EventEmitter<void>();

  cartItemsCount: number = 0;
  cartItems: any[] = [];

  wishlistItemsCount: number = 0;

  onCartClick() {
    this.toggleCart.emit();
  }
  
}
