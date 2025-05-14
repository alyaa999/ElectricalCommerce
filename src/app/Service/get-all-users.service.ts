import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';
import { UsersData } from '../Interfaces/Users/Users';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<UsersData[]> {
    return this.http.get<UsersData[]>(`${environment.apiBaseUrl}/Accounts/GetAllUsers`);
  }

  public deleteUser(userId: string): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiBaseUrl}/Accounts/${userId}`);
  }

}
