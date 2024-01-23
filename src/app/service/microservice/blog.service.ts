import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog, IPagination } from '../../../util/dataModel';
import { blogPath } from '../../../util/urls';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  getAll(filterCriteria: string): Observable<{ blogs: IBlog[], pagination: IPagination }> {
    return this.http.get<{ blogs: IBlog[], pagination: IPagination }>(`${blogPath}?${filterCriteria}`);
  }

  get(blogId :  string): Observable<IBlog> {
    return this.http.get<IBlog>(`${blogPath}/${blogId}`);
  }
}