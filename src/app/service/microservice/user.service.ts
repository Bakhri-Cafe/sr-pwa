import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { userPath } from '../../../util/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  signIn(username: string, password: string) {
    return this.http.post<any>(`${userPath}/signin`, { username, password });
  }
}