import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Service/cart.service';
import { CommonModule } from '@angular/common';
import { EgyptShippingService } from '../../Service/egypt-shipping.service';
import { FormsModule, PristineChangeEvent } from '@angular/forms';
import { BasketItem, CartItems, CustomerBasket, shipping } from '../../Interfaces/Cart/Cart.models';
import { RouterModule } from '@angular/router';
import { SharedServiceService } from '../../Service/shared-service.service';
import { CartWishingDataService } from '../../Service/cart-wishing-data.service';



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

   
     item :CartItems= {
       id: 0,
       productName: '',
       pictureUrl: '',
       description: '',
       brand: '',
       type: '',
       price: 0,
       quantity: 0
     }
    

    constructor ( private cartService : CartService ,private signal : CartWishingDataService , Shipping : EgyptShippingService , private sharedService : SharedServiceService)
    {
      this.Shipping = Shipping.shipping ;
    }

    ngOnInit(): void {
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
      

      console.log(this.Cart);
      
      
    }
   UpdateTotals()
   {
     
    this.Total =  Number(this.Subtotal) + Number(this.SelectValue);
    console.log(this.Total);
   }
   UpdateCart(quantity: number , id : number )
   {
      
       this.item = this.Cart.items
        .find(item => item.id === id) ??{
          id: 0,
          productName: '',
          pictureUrl: '',
          description: '',
          brand: '',
          type: '',
          price: 0,
          quantity: 0
         } ;
         this.item.quantity = quantity;
      
    
      if(quantity == 0 )
      {
        // call delete item from cart ...
        id != 0 ? this.cartService.removeFromCart(id).subscribe({next : (x)=> console.log(x)}) : '';
      }
      else 
      {
        this.cartService.addToCart(this.item).subscribe({
          next: (x) => console.log(x),
          error: (err) => console.error(err)
      });
      }
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
   
}
