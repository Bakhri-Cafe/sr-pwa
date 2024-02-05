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
  private authSubject: BehaviorSubject<{ data: IUser, token: string } | null> = new BehaviorSubject<{ data: IUser, token: string } | null>(null);
  auth$: Observable<{ data: IUser, token: string } | null> = this.authSubject.asObservable();
  isLoggedIn$: Observable<boolean> | undefined



  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.auth$.pipe(map(auth => !!auth?.data?.credential?.username && !!auth?.token))
  }

  signIn(username: string, password: string, rememberMe: boolean) {
    return this.http.post<{ data: IUser, token: string }>(`${environment.userPath}/signin`, { username, password })
      .pipe(
        map((response) => {
          this.setAuthSubject(response)
          this.rememberMe(rememberMe, response)
          return response;
        })
      )
  }

  signUp(name: string, username: string, password: string) {
    return this.http.post<{ data: IUser, token: string }>(`${environment.userPath}/signup`, { username, password , name})
      .pipe(
        map((response) => {
          this.setAuthSubject(response)
          return response;
        })
      )
  }
  setAuthSubject(response: { data: IUser, token: string }) {
    this.authSubject.next(response);
  }

  rememberMe(rememberMe: boolean, response: { data: IUser, token: string }) {
    if (rememberMe) {
      const localBrowserStorage = new srBrowserStorage(this.lStorage);
      localBrowserStorage.set('auth', JSON.stringify(response))
    } else {
      const sessionBrowserStorage = new srBrowserStorage(this.sStorage);
      sessionBrowserStorage.set('auth', JSON.stringify(response))
    }
  }
  logout() {
    this.authSubject.next(null)
    const localBrowserStorage = new srBrowserStorage(this.lStorage);
    const sessionBrowserStorage = new srBrowserStorage(this.sStorage);
    localBrowserStorage.clear()
    sessionBrowserStorage.clear()
  }
} 
