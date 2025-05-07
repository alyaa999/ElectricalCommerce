import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from './Components/footer/footer.component';
import { BackToTopComponent } from "./Components/back-to-top/back-to-top.component";
import { CartSidebarComponent } from "./Components/cart-sidebar/cart-sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BackToTopComponent, CartSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ElectricalCommerce';
  isCartOpen = false;

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
