import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderDto } from '../Interfaces/Checkout/checkout.models';
import { BasketItem, CustomerBasket } from '../Interfaces/Cart/Cart.models';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
   Order  : OrderDto = ({basketId: "", id :0 ,isCredit:false,shippingAddress :{
    firstName :"",
    lastName:"",
    street :"",
    country:"",
    city:"",
   } , deliveryMethodId :1});

   
   SubTotal = new BehaviorSubject(0);
  constructor() { 
    

  }
  
}
