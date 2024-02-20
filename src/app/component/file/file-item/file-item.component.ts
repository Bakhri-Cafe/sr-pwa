import { Component, Input } from '@angular/core';
import { IFile } from '../../../../util/dataModel';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'sr-file-item',
  standalone: true,
  imports: [],
  templateUrl: './file-item.component.html',
  styleUrl: './file-item.component.scss'
})
export class FileItemComponent {
  constructor(private toastService: ToastService) {}
  @Input({required: true}) file !: IFile

  copyImagePath(){
    this.toastService.showSuccessToast('Success toast title', 'This is a success toast message.');
  }
}
