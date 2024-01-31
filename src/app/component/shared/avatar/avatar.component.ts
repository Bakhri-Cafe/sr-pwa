import { Component, Input } from '@angular/core';
import { IFile } from '../../../../util/dataModel';
import { defaultAvatar } from '../../../../util/constants';
@Component({
  selector: 'sr-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  _defaultAvatar = defaultAvatar
  @Input() avatar !: IFile | undefined


  getAvatar() {
    return this.avatar?.path || this._defaultAvatar
  }
}
