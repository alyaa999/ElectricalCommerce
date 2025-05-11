import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  private apiUrl = `${environment.apiBaseUrl}/Accounts`; 
  public isLoggIn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>( this.isLoggedIn());

  constructor(private httpClient:HttpClient) { 
  }


  register(requestData:any):Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/Register`, requestData).pipe(
      tap((Response:any) => {
        console.log(Response.token)
        if (Response&&Response.token) {
          localStorage.setItem('token', Response.token);
          this.isLoggIn.next(true) ;                   
        }
      })
    );
  }
  Login(requestData:any):Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/Login`, requestData).pipe(
      tap((Response:any) => {
        console.log(Response)
        console.log(Response.token)
        if (Response&&Response.token) {
          localStorage.setItem('token', Response.token);  
          this.isLoggIn.next(true) ;                   
        }
      })
    );

  }
  logout(): void {
    localStorage.removeItem('token');
    this.isLoggIn.next(false) ;                   
  }
  isLoggedIn(): boolean {
    console.log(localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

}
