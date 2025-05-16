import { Component, OnInit } from '@angular/core';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CheckoutService } from '../../Service/checkout.service';
import { SharedServiceService } from '../../Service/shared-service.service';
import { OrderDto } from '../../Interfaces/Checkout/checkout.models';
import { CartWishingDataService } from '../../Service/cart-wishing-data.service';
import { CustomerBasket } from '../../Interfaces/Cart/Cart.models';
import { CartService } from '../../Service/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  imports: [RouterModule],
  templateUrl: './thankyou.component.html',
  styleUrl: './thankyou.component.css'
})
export class ThankyouComponent implements OnInit{
   Cart: CustomerBasket ={
    id: "",
    items: []
  }

  constructor( private checkoutService:CheckoutService ,
      private signal : CartWishingDataService , private cart : CartService ) {

    
  }

  
  ngOnInit(): void {
    this.signal.cartItemsCount.set(0);
    this.signal.cartItems.set([]);
    this.cart.getCart().subscribe({next :(x)=>{
      this.Cart = x;

    }})
    this.ClearCart();

   
  }
  ClearCart()
   {
      this.Cart.items.forEach(element => {
      this.cart.removeFromCart(element.id).subscribe({next : (x)=> console.log(x)}) ;

    });

  
   }

}
