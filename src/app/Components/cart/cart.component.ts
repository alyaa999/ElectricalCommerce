import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Service/cart.service';
import { CommonModule } from '@angular/common';
import { EgyptShippingService } from '../../Service/egypt-shipping.service';
import { FormsModule, PristineChangeEvent } from '@angular/forms';
import { BasketItem, CustomerBasket, shipping } from '../../Interfaces/Cart/Cart.models';
import { RouterModule } from '@angular/router';
import { SharedServiceService } from '../../Service/shared-service.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  imports:[CommonModule , FormsModule ,RouterModule]
})
export class CartComponent implements OnInit {
     Cart: CustomerBasket ={
       id: "",
       items: []
     }
    Shipping : shipping[] ;
    SelectValue: number=0;
    Subtotal:number = 0;
    Total : number = 0;
    EmptyCart:boolean =true;

    constructor ( private cartService : CartService , Shipping : EgyptShippingService , private sharedService : SharedServiceService)
    {
      this.Shipping = Shipping.shipping ;
    }

    ngOnInit(): void {
        this.cartService.getCart().subscribe({next :(data) => {this.Cart = data,
          this.Cart.items.forEach(x=> {
            this.Subtotal += x.price * x.quantity;
           });
           this.sharedService.SubTotal.next(this.Subtotal);
           
         }, 
        error :(error)=>this.EmptyCart=false
      });
      

      console.log(this.Cart);
      
      
    }
   UpdateTotals()
   {
     
    this.Total =  Number(this.Subtotal) + Number(this.SelectValue);
    console.log(this.Total);
   }
   
}
