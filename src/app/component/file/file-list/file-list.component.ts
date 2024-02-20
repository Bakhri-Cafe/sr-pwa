import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFile, IPagination } from '../../../../util/dataModel';
import { FileItemComponent } from '../file-item/file-item.component';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { FormControl } from '@angular/forms';
import { search } from '../../../../util/constants';
import { FileService } from '../../../service/microservice/file.service';
import { getCriteria } from '../../../../util/resolver';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { tap } from 'rxjs';

@Component({
  selector: 'sr-file-list',
  standalone: true,
  imports: [FileItemComponent, FloatingInputComponent, PaginationComponent],
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss'
})
export class FileListComponent {
  constructor(private activatedRoute: ActivatedRoute, private fileService: FileService) { }
  files !: IFile[]
  pagination  !: IPagination
  SEARCH = search
  isPagination = true

  searchControl = new FormControl('')

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ files }) => {
        this.files = files.models
        this.pagination = files.pagination
        this.isPagination = true
      });
  }

  handleEmitChanges($event: KeyboardEvent) {
    const element = ($event.target as HTMLInputElement)
    let filterCriteria = ''
    if (!element.value || element.value.length <= 2) {
      filterCriteria = getCriteria(`name=.*`)
      this.isPagination  = true
    } else {
      filterCriteria = getCriteria(`name=${element.value}`, 100)
      this.isPagination = false
    }
    this.fileService.getAll(filterCriteria)
    .subscribe((res) => {
      this.files = res.models
    })
  }
  handlePaginationEmit(pageNumber: number){
      this.fileService.getAll(getCriteria(`name=.*`,20, pageNumber)).subscribe((res)=>{
        this.files = res.models
        this.pagination = res.pagination
        this.isPagination = true
      })
    }
  }