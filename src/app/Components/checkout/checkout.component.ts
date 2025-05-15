import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, AsyncValidatorFn, FormArray, FormsModule, ValidationErrors, ValidatorFn, ɵGetProperty } from '@angular/forms';
import { CustomerBasket } from '../../Interfaces/Cart/Cart.models';
import { CartService } from '../../Service/cart.service';
import { CheckoutService } from '../../Service/checkout.service';
import { AddressDto, DeliveryMethods, OrderDto } from '../../Interfaces/Checkout/checkout.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedServiceService } from '../../Service/shared-service.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-checkout',
  imports: [CommonModule , FormsModule , ReactiveFormsModule , RouterModule ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  cart: CustomerBasket ={
      id: "",
      items: []
    }
    OrderForm: FormGroup;

    DeliveryMethods : DeliveryMethods[] = [{
      id : 1,
      cost: 0,
      deliveryTime: '',
      description: '',
      shortName: ''
    }]
    SubTotal : number = 0;
   constructor(private cartservice : CartService ,
    private checkoutService : CheckoutService,private fb: FormBuilder, private sharedService: SharedServiceService) {
    this.OrderForm = this.fb.group({

        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        country: ['', [Validators.required]],
        deliveryMethodId: ['', [Validators.required]]
    });
     }
  ngOnInit(): void {
    this.cartservice.getCart().subscribe(i=>this.cart = i);
    this.checkoutService.GetDeliveryMehtods().subscribe(i=>this.DeliveryMethods=i);
    console.log(this.DeliveryMethods);
    this.sharedService.SubTotal.subscribe(i=>this.SubTotal = i);


  }
  onSubmit(): void {
    if (this.OrderForm.valid) {
      const formValues = this.OrderForm.value;

      // Create the Shipping Address and Order instances
      const shippingAddress: AddressDto = {
        firstName:formValues.firstName,
        lastName: formValues.lastName,
        street: formValues.street,
        city: formValues.city,
        country: formValues.country
      };
      const Order :OrderDto={
        id : 0,
        basketId:this.cart.id,
        isCredit : false,
        deliveryMethodId:formValues.deliveryMethodId,
        shippingAddress :shippingAddress,
      }
    
      this.sharedService.Order = Order;
      console.log(this.sharedService);


    }


  }



}
