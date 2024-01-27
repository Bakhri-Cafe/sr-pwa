import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLinksComponent } from '../../auth/auth-links/auth-links.component';

@Component({
  selector: 'sr-auth-page',
  standalone: true,
  imports: [RouterOutlet, AuthLinksComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {

}
