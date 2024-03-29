import { Component, afterRender } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/navigation/header/header.component';
import { FooterComponent } from './component/navigation/footer.component';
import { map } from 'rxjs';
import { LoaderComponent } from './component/shared/loader/loader.component';
import { SRLocalStorage, SRSessionStorage, srBrowserStorage } from '../util/browserStorage';
import { IUser } from '../util/dataModel';
import { UserService } from './service/microservice/user.service';
import { ToastComponent } from './component/shared/toast/toast.component';
import { ToastService } from './service/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ToastComponent, CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  toasts: any[] = [];
  constructor(private router: Router, private userService: UserService, public toastService: ToastService) {
    afterRender(() => {
      const sStorage = new SRSessionStorage();
      const lStorage = new SRLocalStorage();
      const localBrowserStorage = new srBrowserStorage(lStorage);
      const sessionBrowserStorage = new srBrowserStorage(sStorage);
      let AuthUser = sessionBrowserStorage.get('auth') || localBrowserStorage.get('auth');
      this.userService.setAuthSubject(JSON.parse(AuthUser || ''));
    })
  }

  authUser: { data: IUser, token: string } | null = null;
  loading: boolean = false;
  loadingPercentage: number = 0;
  ngOnInit() {
    this.router.events
      .pipe(
        map((e) => {
          if ( e instanceof NavigationStart || e instanceof NavigationEnd) {
            this.loading = true;
            this.loadingPercentage = 0;
          }
        })
      )
      .subscribe(() => {
        this.loadingPercentage = Math.floor(this.loadingPercentage + (100 / 11))
      });

      this.toastService.toastEvents.subscribe((e) => {
        this.toasts.push({...e, show: true});
      })
  }
}