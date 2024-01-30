import { Component, Input } from '@angular/core';
import { IUser } from '../../../../util/dataModel';
import { AvatarComponent } from '../../shared/avatar/avatar.component';
import { UserService } from '../../../service/microservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sr-profile-card',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  constructor(private userService: UserService, private router: Router) { }
  @Input({ required: true }) authUser !: IUser

  logout() {
    this.userService.logout();
    this.router.navigate(['/'])
  }
}