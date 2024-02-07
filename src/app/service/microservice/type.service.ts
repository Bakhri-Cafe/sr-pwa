import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination, IType } from '../../../util/dataModel';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }
  getAll(filterCriteria: string): Observable<{ types: IType[], pagination: IPagination }> {
    return this.http.get<{ types: IType[], pagination: IPagination }>(`${environment.typePath}?${filterCriteria}`);
  }
  get(blogId: string): Observable<IType> {
    return this.http.get<IType>(`${environment.typePath}/${blogId}`);
  }
  post(formdata: any): Observable<IType> {
    return this.http.post<IType>(`${environment.typePath}`, formdata);
  }
}
