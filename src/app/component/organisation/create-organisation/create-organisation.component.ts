import { Component, Inject } from '@angular/core';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { FloatingTextareaComponent } from '../../shared/type-head/floating-textarea/floating-textarea.component';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ORGANISATION_CONSTANT } from '../../../../util/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService } from '../../../service/microservice/organisation.service';
import { ImageListComponent } from '../../shared/image-list/image-list.component';
import { FloatingSelectComponent } from '../../shared/type-head/floating-select/floating-select.component';
import { AsyncPipe } from '@angular/common';
import { FileService } from '../../../service/microservice/file.service';
import { IFile } from '../../../../util/dataModel';
import { ToastService } from '../../../service/toast.service';
@Component({
  selector: 'sr-create-organisation',
  standalone: true,
  imports: [AsyncPipe, ImageListComponent, ReactiveFormsModule, FloatingSelectComponent, FloatingInputComponent, FloatingTextareaComponent, MarkdownWrapperComponent],
  templateUrl: './create-organisation.component.html',
  styleUrl: './create-organisation.component.scss'
})
export class CreateOrganisationComponent {
  ORGANISATION_CONSTANT = ORGANISATION_CONSTANT
  selectedFile !: IFile
  organisationForm;
  constructor(private router: Router, private toastService: ToastService,
    private fileService: FileService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private organisationService: OrganisationService) {
    this.organisationForm = this.fb.group({

      name: ['', Validators.required],
      logo: [''],
      description: [''],
      markdown: ['', Validators.required],

    })
  }
  filesDta$ = this.fileService.all()
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ organisation }) => {
        console.log('organisation', organisation)
        if (organisation) {
          this.organisationForm.setValue(
            {
              name: organisation.name,
              markdown: organisation.markdown,
              description: organisation.description,
              logo: ''
            })
        }
      });
  }

  handleOnSubmit() {
    this.organisationService.post({ ...this.organisationForm.value, logo: this.selectedFile._id }).subscribe(res => {
      this.router.navigateByUrl('/admin/organisations')
      this.toastService.showSuccessToast("Organisation created successfully", res.name)
    })
  }
  handleSelectItemEmmiter($event: string) {
    alert($event)
    this.selectedFile = JSON.parse($event)
  }
}
