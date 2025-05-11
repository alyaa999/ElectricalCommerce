import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../Interfaces/Catgory/CatgoryModel';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Productv2Service {

    private apiUrl = `${environment.apiBaseUrl}/Products`;
  constructor( private httpclient : HttpClient) { 

  }
getproductbyID(id: number):Observable<Product>
{
    return this.httpclient.get<Product>(`${this.apiUrl}/${id}`);
}



  addToCart(product: Product, quantity: number): Observable<any> {
    const payload = {
      id: product.id,
      productName: product.name,
      pictureUrl: product.pictureUrl,
      brand: product.brand,
      type: product.type,
      price: product.price,
      quantity: quantity
    };

    return this.httpclient.post(`${environment.apiBaseUrl}/Baskets/basket`, payload);
  }


}


  


