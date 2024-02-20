import { Component, Inject } from '@angular/core';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { FloatingTextareaComponent } from '../../shared/type-head/floating-textarea/floating-textarea.component';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ORGANISATION_CONSTANT } from '../../../../util/constants';
import { ActivatedRoute } from '@angular/router';
import { OrganisationService } from '../../../service/microservice/organisation.service';
@Component({
  selector: 'sr-create-organisation',
  standalone: true,
  imports: [ReactiveFormsModule, FloatingInputComponent, FloatingTextareaComponent, MarkdownWrapperComponent],
  templateUrl: './create-organisation.component.html',
  styleUrl: './create-organisation.component.scss'
})
export class CreateOrganisationComponent {
  ORGANISATION_CONSTANT = ORGANISATION_CONSTANT

  organisationForm;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private organisationService: OrganisationService) {
    this.organisationForm = this.fb.group({

      name: ['', Validators.required],
      logo: [''],
      description: [''],
      markdown: ['', Validators.required],

    })
  }

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
    this.organisationService.post({ ...this.organisationForm.value }).subscribe(res => console.log(res))
  }
}
