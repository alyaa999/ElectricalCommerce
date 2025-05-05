import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css'
})
export class CartSidebarComponent {
  @Input() isOpen = false;
  @Output() closeCart = new EventEmitter<void>();

  close() {
    this.closeCart.emit();
  }
}
