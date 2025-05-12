import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs/internal/Observable';
import { Catgoery } from '../Interfaces/Catgory/CatgoryModel';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatgoryService {

 private apiUrl = `${environment.apiBaseUrl}/Products/Types`; 
  constructor( private httpclient : HttpClient) { 

  }
getCatgory():Observable<Catgoery[]>
{
return this.httpclient.get<Catgoery[]>(`${this.apiUrl}`); 
}



}

