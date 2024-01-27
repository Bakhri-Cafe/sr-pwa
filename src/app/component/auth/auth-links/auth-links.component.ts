import { Component } from '@angular/core';
import {  NavigationEnd, NavigationStart, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'sr-auth-links',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './auth-links.component.html',
  styleUrl: './auth-links.component.scss'
})
export class AuthLinksComponent {
  pageName = '/auth'
  constructor(private route: Router) {
    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.pageName = this.route.url
    })
  }
}