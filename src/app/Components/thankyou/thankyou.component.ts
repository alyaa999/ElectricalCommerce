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

  Order : OrderDto ={
    basketId: "",
    deliveryMethodId: 0,
    shippingAddress: {
      street: "",
      firstName: '',
      lastName: '',
      city: '',
      country: ''
    },
  }
  constructor( private checkoutService:CheckoutService ,
     private sharedService : SharedServiceService, private signal : CartWishingDataService) {

    
  }

  
  ngOnInit(): void {
   this.sharedService.Order.subscribe((data)=> this.Order = data);
    this.checkoutService.CreateOrder(this.Order).subscribe({});
    this.signal.cartItemsCount.set(0);
    this.signal.cartItems.set([]);
   
  }
  

}
