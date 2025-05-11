import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/Product/Product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.apiBaseUrl}/Products`;
  constructor( private http : HttpClient) {

  }
    public getProducts(): Observable<{value: {data: Product[]} }> {
      return this.http.get<{value: {data: Product[]} }>(`${this.apiUrl}`);
  }
}
