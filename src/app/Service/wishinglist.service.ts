import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { WishingList, WishingListItems } from '../Interfaces/Cart/Cart.models';

@Injectable({
  providedIn: 'root'
})
export class WishinglistService {

    private apiUrl = `${environment.apiBaseUrl}/Baskets/favourite`; 
    constructor( private http : HttpClient) {}



   getWishinglist(): Observable<WishingList> {
      return this.http.get<WishingList>(`${this.apiUrl}`);
    }

    removeFromWishingList(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    addToWishingList(item: WishingListItems): Observable<WishingList> {
      return this.http.post<WishingList>(`${this.apiUrl}`, item);
    }


}
