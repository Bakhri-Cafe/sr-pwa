import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivationEnd, ActivationStart, GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent, RouterOutlet, RoutesRecognized } from '@angular/router';
import { HeaderComponent } from './component/navigation/header/header.component';
import { FooterComponent } from './component/navigation/footer.component';
import { Observable, filter, map, of } from 'rxjs';
import { LoaderComponent } from './component/shared/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) { }
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
  }
}