import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs/internal/Observable';
import { DataCount } from '../Interfaces/AllDataCount/DataCount';


@Injectable({
  providedIn: 'root'
})
export class GetAllDatCountService {

  private Url = `${environment.apiBaseUrl}/DataCount`;
  constructor(private http: HttpClient) { }

  getAllDataCount(): Observable<DataCount> {
    return this.http.get<DataCount>(this.Url);
  }
}
