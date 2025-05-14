import { Component, OnInit } from '@angular/core';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CheckoutService } from '../../Service/checkout.service';
import { SharedServiceService } from '../../Service/shared-service.service';
import { OrderDto } from '../../Interfaces/Checkout/checkout.models';
import { CartWishingDataService } from '../../Service/cart-wishing-data.service';

@Component({
  selector: 'app-thankyou',
  imports: [],
  templateUrl: './thankyou.component.html',
  styleUrl: './thankyou.component.css'
})
export class ThankyouComponent implements OnInit{


  constructor( private checkoutService:CheckoutService ,
      private signal : CartWishingDataService) {

    
  }

  
  ngOnInit(): void {
    this.signal.cartItemsCount.set(0);
    this.signal.cartItems.set([]);
   
  }
  

}
