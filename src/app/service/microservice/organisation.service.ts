import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog, IOrganisation, IPagination } from '../../../util/dataModel';
import { blogPath, organisationPath } from '../../../util/urls';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<IOrganisation[]>(`${organisationPath}`)
  }

  get(organisationId: string): Observable<IOrganisation> {
    return this.http.get<IOrganisation>(`${organisationPath}/${organisationId}`);
  }
}
