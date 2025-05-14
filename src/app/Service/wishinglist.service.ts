import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { WishingList, WishingListItems } from '../Interfaces/Cart/Cart.models';
import { AuthService } from './auth.service';
import { EMPTY_OBSERVER } from 'rxjs/internal/Subscriber';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishinglistService {

    private apiUrl = `${environment.apiBaseUrl}/Baskets/favourite`;
    constructor( private http : HttpClient,private authService:AuthService) {}



    getWishinglist(): Observable<WishingList> {
      if(!this.authService.IsAuthenticated()){
        return EMPTY;
      }
      return this.http.get<WishingList>(`${this.apiUrl}`);
    }

    removeFromWishingList(id: number): Observable<void> {
      if(!this.authService.IsAuthenticated()){
        return EMPTY;
      }
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    addToWishingList(item: WishingListItems): Observable<WishingList> {
      if(!this.authService.IsAuthenticated()){
        return EMPTY;
      }
      return this.http.post<WishingList>(`${this.apiUrl}`, item);
    }


}
