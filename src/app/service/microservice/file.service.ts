import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFile, IPagination } from '../../../util/dataModel';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private http: HttpClient) { }
  getAll(filterCriteria: string): Observable<{ models: IFile[], pagination: IPagination }> {
    return this.http.get<{ models: IFile[], pagination: IPagination }>(`${environment.filePath}/?${filterCriteria}`);
  }
  post(formdata: any): Observable<IFile> {
    return this.http.post<IFile>(`${environment.filePath}`, formdata);
  }
  put(_id: string, formdata: any): Observable<IFile> {
    return this.http.put<IFile>(`${environment.filePath}/${_id}`, formdata);
  }
  get(_id: string): Observable<IFile> {
    return this.http.get<IFile>(`${environment.filePath}/${_id}`);
  }
}
