import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrganisation } from '../../../../util/dataModel';
import { MarkdownWrapperComponent } from '../../shared/markdown-wrapper.component';

@Component({
  selector: 'sr-organisation-detail',
  standalone: true,
  imports: [MarkdownWrapperComponent],
  templateUrl: './organisation-detail.component.html',
  styleUrl: './organisation-detail.component.scss'
})
export class OrganisationDetailComponent {
  constructor(private activatedRoute: ActivatedRoute) { }
  organisation !: IOrganisation
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ organisation }) => {
        this.organisation = organisation
      });
  }
}
