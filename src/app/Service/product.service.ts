import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/Product/Product.models';

interface ProductApiResponse {
  value: {
    data: Product[];
    count: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  public getProducts(index: number = 1, pageSize: number = 9): Observable<ProductApiResponse> {
    let params = new HttpParams()
      .set('index', index.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<ProductApiResponse>(`${this.apiUrl}/Products`, { params });
  }

  public addProductToWishList(product: Product)
  {
    this.http.post(`${this.apiUrl}/Baskets/favourite`, product).subscribe();
  }

  public removeProductFromWishList(productId: number)
  {
    this.http.delete(`${this.apiUrl}/Baskets/favourite/${productId}`).subscribe();
  }

  getproductbyID(id: number):Observable<Product>
  {
      return this.http.get<Product>(`${this.apiUrl}/Products/${id}`);
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

    return this.http.post(`${environment.apiBaseUrl}/Baskets/basket`, payload);
  }
  
}
