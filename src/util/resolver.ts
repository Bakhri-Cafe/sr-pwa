import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogService } from '../app/service/microservice/blog.service';
import { IBlog, IOrganisation, IPagination } from './dataModel';
import { forkJoin } from 'rxjs';
import { OrganisationService } from '../app/service/microservice/organisation.service';

export const geterCriteria = (type: string, pageNumber = 1) => {
  return `type=${type}&limit=20&sort=createdAt&page=${pageNumber}`
}

export const blogResolver: ResolveFn<IBlog> = (route, state) => {
  return inject(BlogService).get(route.paramMap.get('id')!);
};

export const blogsResolver: ResolveFn<{ blogs: IBlog[]; pagination: IPagination }> = (route, state) => {
  return inject(BlogService).getAll(geterCriteria(route.paramMap.get('blogType') ?? 'Results', route.queryParams['page'] ?? 1));
};

export const WelcomeResolver: ResolveFn<any> = (route, state) => {
  const result = inject(BlogService).getAll(geterCriteria('Results')!);
  const admitCards = inject(BlogService).getAll(geterCriteria('Admit Cards')!);
  const latestJobs = inject(BlogService).getAll(geterCriteria('Latest Jobs')!);
  return forkJoin([result, admitCards, latestJobs]);
};

export const organisationsResolver: ResolveFn<IOrganisation[]> = (route, state) => {
  return inject(OrganisationService).getAll();
};

export const organisationResolver: ResolveFn<IOrganisation> = (route, state) => {
  return inject(OrganisationService).get(route.paramMap.get('_id')??'');
};