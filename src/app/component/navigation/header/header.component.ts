import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../../../appService/app.service';
import { UserService } from '../../../service/microservice/user.service';
import { IUser } from '../../../../util/dataModel';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { AvatarComponent } from '../../shared/avatar/avatar.component';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'sr-header',
  standalone: true,
  imports: [RouterLink, NgIf, AvatarComponent, AsyncPipe, ProfileCardComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  auth!: { data: IUser, token: string };
  constructor(public appService: AppService, public userService: UserService) { }
  ngOnInit(): void {
    this.userService.auth$.subscribe(
      res => {
        if (res)
          this.auth = res
      }
    );
  }
  fullanme() {
    const { first, middle, last } = this.auth.data.name
    return `${first} ${middle || ''} ${last || ''}`
  }
}
