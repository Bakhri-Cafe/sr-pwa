import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  IOrganisation } from '../../../util/dataModel';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<IOrganisation[]>(`${environment.organisationPath}`)
  }

  get(organisationId: string): Observable<IOrganisation> {
    return this.http.get<IOrganisation>(`${environment.organisationPath}/${organisationId}`);
  }
}
