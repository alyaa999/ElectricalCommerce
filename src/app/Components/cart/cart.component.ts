import { Component, OnInit, signal, computed } from '@angular/core';
import { CartService } from '../../Service/cart.service';
import { EgyptShippingService } from '../../Service/egypt-shipping.service';
import { BasketItem, CustomerBasket, shipping } from '../../Interfaces/Cart/Cart.models';
import { SharedServiceService } from '../../Service/shared-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class CartComponent implements OnInit {
  Cart = signal<CustomerBasket>({ id: "", items: [] });
  Shipping: shipping[] = [];
  SelectValue = signal<number>(0);
  previousQuantities: Record<string, number> = {};
  
  Subtotal = computed(() => this.Cart().items.reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  ));
  
  Total = computed(() => this.Subtotal() + this.SelectValue());
  EmptyCart = computed(() => this.Cart().items.length > 0);

  constructor(
    private cartService: CartService,
    private ShippingService: EgyptShippingService,
    private sharedService: SharedServiceService
  ) {
    this.Shipping = this.ShippingService.shipping;
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCart().subscribe({
      next: (data) => {
        this.Cart.set(data);
        // Initialize previous quantities
        data.items.forEach(item => {
          this.previousQuantities[item.id] = item.quantity;
        });
        this.SelectValue.set(this.Shipping[0]?.price || 0);
        this.sharedService.SubTotal.next(this.Subtotal());
      },
      error: (error) => console.error('Error loading cart:', error)
    });
  }

  adjustQuantity(item: BasketItem, change: number): void {
    // Store current quantity before changing
    this.previousQuantities[item.id] = item.quantity;
    
    const newQuantity = item.quantity + change;
    if (newQuantity < 1) return;
    
    // Update local state immediately for responsiveness
    const updatedItems = this.Cart().items.map(i => 
      i.id === item.id ? { ...i, quantity: newQuantity } : i
    );
    this.Cart.update(c => ({ ...c, items: updatedItems }));
  }

  UpdateTotals(): void {
    this.sharedService.SubTotal.next(this.Subtotal());
  }
}