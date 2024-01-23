import { Component, Input } from '@angular/core';
import { IFile } from '../../../../util/dataModel';

@Component({
  selector: 'sr-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() avatar !: IFile | undefined
}
