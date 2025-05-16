import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../Service/shared-service.service';
import { OrderDto } from '../../Interfaces/Checkout/checkout.models';
import { Route, RouterModule } from '@angular/router';
import { CheckoutService } from '../../Service/checkout.service';
import { StripeService } from '../../Service/stripe.service';
import { CommonModule } from '@angular/common';
import { FormsModule, PristineChangeEvent } from '@angular/forms';
import { Router } from '@angular/router';
import { CartWishingDataService } from '../../Service/cart-wishing-data.service';
import { single } from 'rxjs';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-confirm-order',
  imports: [RouterModule , CommonModule , FormsModule],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css'
})

export class ConfirmOrderComponent implements OnInit{
  selectedPaymentMethod: 'cash' | 'card' | null = null;

  Order : OrderDto ={
    basketId: "",
    id :0,
    deliveryMethodId: 0,
    isCredit : false ,
    shippingAddress: {
      street: "",
      firstName: '',
      lastName: '',
      city: '',
      country: ''
    },
  }
 
 constructor( private router : Router,
  private checkoutService : CheckoutService,private stripeService : StripeService,private sharedService : SharedServiceService,) {
 
  
 }
  ngOnInit(): void {
    this.Order = this.sharedService.Order;

  
  }
  selectPayment(selectMethod : 'cash' | 'card' | null)
  {
    this.selectedPaymentMethod = selectMethod;
    this.Order.isCredit = (this.selectedPaymentMethod == 'card');

    

  }


  async confirmOrder() {
  

   

    console.log(this.Order)
  
    try {
      // ✅ Ensure the order is created first
     var returnOrder =  await lastValueFrom(this.checkoutService.CreateOrder(this.Order));
     this.Order.id =  returnOrder.id;
  
      if (this.selectedPaymentMethod === 'cash') {
        this.router.navigate(['/thankyou']);
      } else {
        this.checkoutService.Credit(this.Order.id).subscribe((res) => {
          location.href= res.url;
          console.log('Redirecting to Stripe:', res);
        });
      }
  
    } catch (err) {
      console.error('Failed to create order:', err);
      // Show user-friendly error
    }
  }
  
}
