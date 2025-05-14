import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { BackToTopComponent } from '../../Components/back-to-top/back-to-top.component';
import { CartSidebarComponent } from '../../Components/cart-sidebar/cart-sidebar.component';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BackToTopComponent, CartSidebarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title = 'ElectricalCommerce';
  isCartOpen = false;

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
