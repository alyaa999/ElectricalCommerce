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
  private apiUrl = `${environment.apiBaseUrl}/Products`;

  constructor(private http: HttpClient) {}

  public getProducts(index: number = 1, pageSize: number = 9): Observable<ProductApiResponse> {
    let params = new HttpParams()
      .set('index', index.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<ProductApiResponse>(this.apiUrl, { params });
  }
}
