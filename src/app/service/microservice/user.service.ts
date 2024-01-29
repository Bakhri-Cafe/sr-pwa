import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IUser } from '../../../util/dataModel';
import { map } from 'rxjs/operators'; // Import the shareReplay operator
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BStorageService } from '../b-storage.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  // create an internal subject and an observable to keep track
  private authSubject: BehaviorSubject<{data:IUser, token:string} | null> = new BehaviorSubject<{data:IUser, token:string} | null>(null);
  auth$: Observable<{data:IUser, token:string} | null> = this.authSubject.asObservable();

  isLoggedIn  = false
  signIn(username: string, password: string, rememberMe: string) {
    return this.http.post<{data:IUser, token:string}>(`${environment.userPath}/signin`, { username, password })
      .pipe(
        map((response) => {
          this.authSubject.next(response);
          if (response.token) {
            this.isLoggedIn = true
          }else{
            this.isLoggedIn = false
          }
          return response;
        })
      )
  }
} 