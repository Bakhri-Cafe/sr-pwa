import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  signIn(username: string, password: string) {
    return this.http.post<any>(`${environment.userPath}/signin`, { username, password });
  }
}