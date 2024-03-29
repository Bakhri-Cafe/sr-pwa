import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog, IPagination } from '../../../util/dataModel';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  getAll(filterCriteria: string): Observable<{ blogs: IBlog[], pagination: IPagination }> {
    return this.http.get<{ blogs: IBlog[], pagination: IPagination }>(`${environment.blogPath}?${filterCriteria}`);
  }
  get(blogId: string): Observable<IBlog> {
    return this.http.get<IBlog>(`${environment.blogPath}/${blogId}`);
  }
  post(formdata: any): Observable<IBlog> {
    return this.http.post<IBlog>(`${environment.blogPath}`, formdata);
  }
  put(_id: string, formdata: any): Observable<IBlog>{
    return this.http.put<IBlog>(`${environment.blogPath}/${_id}`, formdata);
  }
  count(typeId: string): Observable<number> {
    return this.http.get<number>(`${environment.blogPath}/${typeId}/count`);
  } 
}