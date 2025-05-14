import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderDto } from '../Interfaces/Checkout/checkout.models';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
   Order  : OrderDto = ({basketId: "", isCredit:false,shippingAddress :{
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
