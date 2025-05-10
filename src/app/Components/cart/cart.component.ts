import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Service/cart.service';
import { Cart, CartProduct, shipping } from '../../Interfaces/Cart/Cart.models';
import { CommonModule } from '@angular/common';
import { EgyptShippingService } from '../../Service/egypt-shipping.service';
import { FormsModule, PristineChangeEvent } from '@angular/forms';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  imports:[CommonModule , FormsModule]
})
export class CartComponent implements OnInit {
     Cart: Cart ={
       id: 0,
       customerId: 0,
       totalPrice: 0,
       totalItemsNumber: 0,
       createdDate: null,
       cartProducts: []
     }
    Shipping : shipping[] ;
    SelectValue: number=0;
    Subtotal:number = 0;
    Total : number = 0;

    constructor ( private cartService : CartService , Shipping : EgyptShippingService)
    {
      this.Shipping = Shipping.shipping ;
    }

    ngOnInit(): void {
        this.cartService.getCart().subscribe((data)=> {this.Cart = data , this.setPrimaryImage()});
      
    }
   UpdateTotals()
   {
    this.Total =  Number(this.Subtotal) + Number(this.SelectValue);
    console.log(this.Total);
   }
   setPrimaryImage()
    {
        this.Cart.cartProducts.forEach(i=>{
        const img  =  i.images?.find(image=>image.isPrimary)?.imageUrl ??"assests/images/default.jpg" ;
        this.Subtotal+= i.unitPrice * i.quantity;
        i.PrimaryImage = img;
      });
    }
}
