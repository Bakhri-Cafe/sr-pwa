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
}