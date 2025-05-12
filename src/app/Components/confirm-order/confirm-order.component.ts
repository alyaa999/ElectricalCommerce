import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../Service/shared-service.service';
import { OrderDto } from '../../Interfaces/Checkout/checkout.models';
import { Route, RouterModule } from '@angular/router';
import { CheckoutService } from '../../Service/checkout.service';
import { StripeService } from '../../Service/stripe.service';
import { CommonModule } from '@angular/common';
import { FormsModule, PristineChangeEvent } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  imports: [RouterModule , CommonModule , FormsModule],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css'
})

export class ConfirmOrderComponent implements OnInit{
  selectedPaymentMethod: 'cash' | 'card' | null = null;

 Order : OrderDto =
  {basketId: '', shippingAddress :{
    firstName :"",
    lastName:"",
    street :"",
    country:"",
    city:"",
   } , deliveryMethodId :1}
 
 constructor( private sharedService : SharedServiceService , private router : Router,
  private checkoutService : CheckoutService ,private stripeService : StripeService) {
 
  
 }
  ngOnInit(): void {
    this.sharedService.Order.subscribe((next) => {
      this.Order = next;
      console.log('Updated Order:', this.Order);
    } );
    console.log(this.Order);
  }
  selectPayment(selectMethod : 'cash' | 'card' | null)
  {
    this.selectedPaymentMethod = selectMethod;

  }
  
  confirmOrder()
  {
    if(this.selectedPaymentMethod == 'cash')
    {  
      console.log(this.Order);
               // call api to create a new order
            this.checkoutService.CreateOrder(this.Order).subscribe(async response => {
              console.log('Order created successfully:', response);
              this.router.navigate(['/thankyou']);

            }, error => {
              console.error('Error creating order:', error);
            });
    }
    else 
    {
        this.checkoutService.Credit().subscribe(async (res) => {
          await this.stripeService.redirectToCheckout(res.id);
          //save order after check success or failed
          
        });
    }
  }
}
