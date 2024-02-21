import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogService } from '../app/service/microservice/blog.service';
import { IBlog, IFile, IOrganisation, IPagination, IType } from './dataModel';
import { forkJoin } from 'rxjs';
import { OrganisationService } from '../app/service/microservice/organisation.service';
import { TypeService } from '../app/service/microservice/type.service';
import { FileService } from '../app/service/microservice/file.service';

export const getCriteria = (extraCriteria: string, limit = 20,  pageNumber = 1, sortBy = 'createdAt') => {
  return `${extraCriteria}&limit=${limit}&sort=${sortBy}&page=${pageNumber}`
}

export const blogResolver: ResolveFn<IBlog> = (route, state) => {
  return inject(BlogService).get(route.paramMap.get('id')!);
};

export const blogsResolver: ResolveFn<{ blogs: IBlog[]; pagination: IPagination }> = (route, state) => {
  return inject(BlogService).getAll(getCriteria(`type=${route.paramMap.get('blogType') ?? 'Results'}`,20, route.queryParams['page'] ?? 1));
};

export const WelcomeResolver: ResolveFn<any> = (route, state) => {
  const result = inject(BlogService).getAll(getCriteria('type=Results')!);
  const admitCards = inject(BlogService).getAll(getCriteria('type=Admit Cards')!);
  const latestJobs = inject(BlogService).getAll(getCriteria('type=Latest Jobs')!);
  return forkJoin([result, admitCards, latestJobs]);
};

export const organisationsResolver: ResolveFn<IOrganisation[]> = (route, state) => {
  return inject(OrganisationService).getAll();
};

export const organisationResolver: ResolveFn<IOrganisation> = (route, state) => {
  return inject(OrganisationService).get(route.paramMap.get('_id') ?? '');
};

export const typesResolver: ResolveFn<{ types: IType[]; pagination: IPagination }> = (route, state) => {
  return inject(TypeService).getAll(getCriteria('', route.queryParams['page']));
};

export const filesResolver: ResolveFn<{ models: IFile[]; pagination: IPagination }> = (route, state) => {
  return inject(FileService).getAll(getCriteria(`name=.*`));
};