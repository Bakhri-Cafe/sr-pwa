import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { OrganisationItemComponent } from '../organisation-item/organisation-item.component';
import { IOrganisation } from '../../../../util/dataModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sr-organisation-list',
  standalone: true,
  imports: [RouterOutlet, OrganisationItemComponent, CommonModule],
  templateUrl: './organisation-list.component.html',
  styleUrl: './organisation-list.component.scss'
})
export class OrganisationListComponent {
  constructor(private activatedRoute: ActivatedRoute) { }
  organisations !: IOrganisation[]
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ organisations }) => {
        this.organisations = organisations
      });
  }
}
