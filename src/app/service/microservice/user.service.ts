import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IUser } from '../../../util/dataModel';
import { map } from 'rxjs/operators'; // Import the shareReplay operator
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SRLocalStorage, SRSessionStorage, srBrowserStorage } from '../../../util/browserStorage';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  sStorage = new SRSessionStorage();
  lStorage = new SRLocalStorage();

  constructor(private http: HttpClient) { }
  // create an internal subject and an observable to keep track
  private authSubject: BehaviorSubject<{ data: IUser, token: string } | null> = new BehaviorSubject<{ data: IUser, token: string } | null>(null);
  auth$: Observable<{ data: IUser, token: string } | null> = this.authSubject.asObservable();

  isLoggedIn = false
  signIn(username: string, password: string, rememberMe: boolean) {
    return this.http.post<{ data: IUser, token: string }>(`${environment.userPath}/signin`, { username, password })
      .pipe(
        map((response) => {
          this.authSubject.next(response);
          if (response.token) {
            this.isLoggedIn = true
          } else {
            this.isLoggedIn = false
          }
          if (rememberMe) {
            const localBrowserStorage = new srBrowserStorage(this.lStorage);
            localBrowserStorage.set('auth', JSON.stringify(response))
          } else {
            const sessionBrowserStorage = new srBrowserStorage(this.sStorage);
            sessionBrowserStorage.set('auth', JSON.stringify(response))
          }
          return response;
        })
      )
  }
} 