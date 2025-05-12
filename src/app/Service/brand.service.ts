import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs/internal/Observable';
import { Brand, Catgoery } from '../Interfaces/Catgory/CatgoryModel';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = `${environment.apiBaseUrl}/Products/Brands`; 
  constructor( private httpclient : HttpClient) { 

  }
getBrands():Observable<Brand[]>
{
return this.httpclient.get<Brand[]>(`${this.apiUrl}`); 
}

}




