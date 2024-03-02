import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CreateTypeComponent } from '../create-type/create-type.component';
import { ActivatedRoute } from '@angular/router';
import { IActiveType, IPagination, IType } from '../../../../util/dataModel';
import { NgClass } from '@angular/common';
import { ModalComponent } from '../../shared/modal/modal.component';
import { TypeService } from '../../../service/microservice/type.service';
import { map } from 'rxjs';
import { removeDuplicates } from '../../../../util/transform';
import { BlogService } from '../../../service/microservice/blog.service';
import { HumanRedableDatePipe } from '../../../pipe/human-redable-date.pipe';
import { ToastService } from '../../../service/toast.service';
@Component({
  selector: 'sr-list-type',
  standalone: true,
  imports: [CreateTypeComponent, NgClass, ModalComponent, HumanRedableDatePipe],
  templateUrl: './list-type.component.html',
  styleUrl: './list-type.component.scss'
})
export class ListTypeComponent {
  @ViewChild(ModalComponent) modalComponent !: ModalComponent;
  editType(arg0: string) {
    throw new Error('Method not implemented.');
  }
  deleteType(arg0: string) {
    this.typeService.delete(arg0).subscribe(() => this.types$.subscribe(types => {
      this.cat1Data = removeDuplicates(types.map((type: IType) => type.cat1))
      this.cat2Data = removeDuplicates(types.map((type: IType) => type.cat2))
      this.types = types as IActiveType[]
    }))
  }
  constructor(private toastService: ToastService, private activatedRoute: ActivatedRoute, private blogService: BlogService, private typeService: TypeService) { }
  cat1Data !: string[]
  cat2Data !: (string | undefined)[]
  _showDescription: boolean = false
  types!: IActiveType[]
  pagination !: IPagination
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ types }) => {

        this.cat1Data = removeDuplicates(types.result.map((type: IType) => type.cat1)),
          this.cat2Data = removeDuplicates(types.result.map((type: IType) => type.cat2)),

          this.types = types.result.map((type: IActiveType) => {
            type.classes = []
            this.blogService.count(type._id).subscribe((blogCount: number) => {
              type.blogCount = blogCount;
            });
            return type;
          });
        this.pagination = types.pagination;
      });
  }
  handleTypeClick(id: string) {
    this.types = this.types.map(type => {
      type.classes = type.classes.filter(c => c !== 'active')
      if (type._id === id) {
        type.classes[0] = 'active'
      }
      return type
    })
  }

  types$ = this.typeService.all().pipe(
    map((types: IType[]) => {
      return types.map((type: IType) => {
        const activeType: IActiveType = {
          ...type,
          classes: [],
          blogCount: 0
        };
        this.blogService.count(type._id).subscribe((blogCount: number) => {
          activeType.blogCount = blogCount;
        });
        return activeType;
      });
    })
  )

  handleOnSubmit(formdata: any) {
    this.typeService.post(JSON.parse(formdata)).subscribe(() => this.types$.subscribe(types => {
      this.cat1Data = removeDuplicates(types.map((type: IType) => type.cat1))
      this.cat2Data = removeDuplicates(types.map((type: IType) => type.cat2))
      this.types = types as IActiveType[]
    }))
    this.triggerClosePopupHandle()
    this.toastService.showSuccessToast('Success', 'Type created successfully');
  }

  triggerClosePopupHandle() {
    this.modalComponent.close()
  }
  triggerOpenPopupHandle() {
    this.modalComponent.open()
  }
}