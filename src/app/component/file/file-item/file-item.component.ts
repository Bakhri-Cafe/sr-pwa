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
  constructor(private toastService : ToastService) { }
  @Input({required: true}) file !: IFile

  copyImagePath(filePath: string){
    navigator.clipboard.writeText(filePath)
    this.toastService.showSuccessToast('Copied', 'Image path copied to clipboard')
  }
}
