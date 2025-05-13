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

@Component({
  selector: 'app-confirm-order',
  imports: [RouterModule , CommonModule , FormsModule],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css'
})

export class ConfirmOrderComponent implements OnInit{
  selectedPaymentMethod: 'cash' | 'card' | null = null;

 
 
 constructor( private router : Router,
  private checkoutService : CheckoutService,private stripeService : StripeService) {
 
  
 }
  ngOnInit(): void {
  
  }
  selectPayment(selectMethod : 'cash' | 'card' | null)
  {
    this.selectedPaymentMethod = selectMethod;

  }
  
  confirmOrder()
  {
    if(this.selectedPaymentMethod == 'cash')
    {  
          this.router.navigate(['/thankyou']);
    }
    else 
    {
        this.checkoutService.Credit().subscribe((res) => {
          location.href =res;
          console.log(res);
        });
    }
   

    
  }
}
