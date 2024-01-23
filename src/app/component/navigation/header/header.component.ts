import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../../../appService/app.service';

@Component({
  selector: 'sr-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public appService: AppService){}
}
