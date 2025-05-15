import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';
import { Brand, BrandToSend, Type, TypeToSend } from '../Interfaces/TypesBrands/TypesBrand';

@Injectable({
  providedIn: 'root'
})
export class TypesBrandService {

  constructor(private http: HttpClient) { }


  public getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.apiBaseUrl}/brand`);
  }

  public getBrandById(Id: number): Observable<Brand> {
    return this.http.get<Brand>(`${environment.apiBaseUrl}/brand/${Id}`);
  }

  public addBrand(brand: BrandToSend): Observable<Brand> {
    return this.http.post<Brand>(`${environment.apiBaseUrl}/brand`, brand);
  }
  public deleteBrand(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/brand/${id}`);
  }


  public updateBrand(id: number, brand: BrandToSend): Observable<Brand> {
    return this.http.put<Brand>(`${environment.apiBaseUrl}/brand/${id}`, brand);
  }

  public getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(`${environment.apiBaseUrl}/type`);
  }
  public getTypeById(Id: number): Observable<Type> {
    return this.http.get<Type>(`${environment.apiBaseUrl}/type/${Id}`);
  }


  public addType(type: FormData): Observable<Type> {
    return this.http.post<Type>(`${environment.apiBaseUrl}/type`, type);
  }


  public deleteType(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/type/${id}`);
  }
  public updateType(id: number, type: FormData): Observable<Type> {
    return this.http.put<Type>(`${environment.apiBaseUrl}/type/${id}`, type);
  }

}
