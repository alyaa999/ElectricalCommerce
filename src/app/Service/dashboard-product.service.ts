import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { DashboardProductApiResponse, Product } from '../Interfaces/Product/Product.models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DashboardProductService {

  
  private apiUrl = `${environment.apiBaseUrl}`;
  constructor(private http: HttpClient) { }
  
  products = signal<Product[]>([]);
  public getProducts(
    index: number = 1,
    pageSize: number = 10,

  ): Observable<DashboardProductApiResponse> {
    let params = new HttpParams()
      .set('index', index.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<DashboardProductApiResponse>(`${this.apiUrl}/Products`, { params });
  }

  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Products/${id}`);
  }

}
