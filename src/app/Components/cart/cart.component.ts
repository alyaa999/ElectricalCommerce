import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Service/cart.service';
import { CommonModule } from '@angular/common';
import { EgyptShippingService } from '../../Service/egypt-shipping.service';
import { FormsModule, PristineChangeEvent } from '@angular/forms';
import { BasketItem, CustomerBasket, shipping } from '../../Interfaces/Cart/Cart.models';
import { RouterModule } from '@angular/router';
import { SharedServiceService } from '../../Service/shared-service.service';
import { AuthService } from '../../Service/auth.service';
import { ManageUnAuthUserService } from '../../Service/manage-un-auth-user.service';



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
    public isLogin: boolean = false;

    constructor ( private cartService : CartService,private authService:AuthService ,private unAthuUser:ManageUnAuthUserService, Shipping : EgyptShippingService , private sharedService : SharedServiceService)
    {
      this.Shipping = Shipping.shipping ;
    }

    ngOnInit(): void {
    this.authService.isLoggIn.subscribe(
        {
          next: (behaviorvalue) => {
            this.isLogin = behaviorvalue;
          }
        }
      ) 
      if(this.isLogin){
        this.cartService.getCart().subscribe({next :(data) => {this.Cart = data,
          this.Cart.items.forEach(x=> {
            this.Subtotal += x.price * x.quantity;
           });
           this.sharedService.SubTotal.next(this.Subtotal);
           if(this.Cart.items.length == 0)
             this.EmptyCart= false;
         }, 
        error :(error)=>this.EmptyCart=false
        });
      }
      else{
        this.Cart.items=this.unAthuUser.GetProductFromCart()
      }
      console.log(this.Cart);
      
      
    }
   UpdateTotals()
   {
     
    this.Total =  Number(this.Subtotal) + Number(this.SelectValue);
    console.log(this.Total);
   }
   
}
