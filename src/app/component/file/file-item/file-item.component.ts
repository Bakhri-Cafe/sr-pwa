import { Component, Input } from '@angular/core';
import { IFile } from '../../../../util/dataModel';
<<<<<<< Updated upstream
=======
import { ToastService } from '../../../service/toast.service';
import { RouterLink } from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'sr-file-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './file-item.component.html',
  styleUrl: './file-item.component.scss'
})
export class FileItemComponent {
  @Input({required: true}) file !: IFile

  copyImagePath(filePath: string){
    navigator.clipboard.writeText(filePath)
  }
}
