import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../shared/avatar/avatar.component';
import { IOrganisation } from '../../../../util/dataModel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sr-organisation-item',
  standalone: true,
  imports: [OrganisationItemComponent, AvatarComponent, RouterLink],
  templateUrl: './organisation-item.component.html',
  styleUrl: './organisation-item.component.scss'
})
export class OrganisationItemComponent {
  @Input({ required: true }) organisation !: IOrganisation;
}
