import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/navigation/header/header.component';
import { FooterComponent } from './component/navigation/footer.component';
import { map } from 'rxjs';
import { LoaderComponent } from './component/shared/loader/loader.component';
import { SRLocalStorage, SRSessionStorage, srBrowserStorage } from '../util/browserStorage';
import { IUser } from '../util/dataModel';
import { UserService } from './service/microservice/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router, private userService: UserService) { }
  sStorage = new SRSessionStorage();
  lStorage = new SRLocalStorage();
  authUser: { data: IUser, token: string } | null = null;
  loading: boolean = false;
  loadingPercentage: string = '0vw';
  ngOnInit() {
    this.router.events
      .pipe(
        map((e) => {
          if (e instanceof NavigationStart) {
            this.loading = true;
            this.loadingPercentage = '0vw';
          }
          if (e instanceof NavigationEnd) {
            this.loading = false;
            this.loadingPercentage = '0vw';
          }
        })
      )
      .subscribe(() => {
        this.loadingPercentage = Math.floor(Number(this.loadingPercentage.split('vw')[0]) + (100 / 11)).toString()
      });
    const localBrowserStorage = new srBrowserStorage(this.lStorage);
    const sessionBrowserStorage = new srBrowserStorage(this.sStorage);

    let AuthUser = localBrowserStorage.get('auth') || sessionBrowserStorage.get('auth');
    this.userService.setAuthSubject(JSON.parse(AuthUser || ''));

  }
}