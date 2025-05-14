import { Injectable } from '@angular/core';
import { Product } from '../Interfaces/Catgory/CatgoryModel';
import { CartItems } from '../Interfaces/Cart/Cart.models';

@Injectable({
  providedIn: 'root'
})
export class ManageUnAuthUserService {

  constructor() { }

  AddProductToCart(newProduct:CartItems){
    let cart: CartItems[] = JSON.parse(localStorage.getItem('cart') || '[]');
    let existingProduct:CartItems|undefined= cart.find(item=>item.id==newProduct.id);
    if(existingProduct){
      existingProduct.quantity+=newProduct.quantity
    }else{
      cart.push(newProduct);
    }
    localStorage.setItem('cart',JSON.stringify(cart));
  }
  GetProductFromCart():CartItems[]{
    let cart: CartItems[] = JSON.parse(localStorage.getItem('cart') || '[]');    
    return cart; 
  }
}
