import { Routes } from '@angular/router';
import { WelcomeComponent } from './component/page/welcome/welcome.component';
import { BlogsComponent } from './component/page/blogs/blogs.component';
import { WelcomeResolver, blogResolver, blogsResolver, organisationResolver, organisationsResolver } from '../util/resolver';
import { BlogDetailPageComponent } from './component/page/blog-detail-page/blog-detail-page.component';
import { OrganisationPageComponent } from './component/page/organisation-page/organisation-page.component';
import path from 'path';
import { OrganisationListComponent } from './component/organisation/organisation-list/organisation-list.component';
import { OrganisationDetailComponent } from './component/organisation/organisation-detail/organisation-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', resolve: { blogs: WelcomeResolver }, component: WelcomeComponent },
    { path: 'welcome/blogs/:blogType', resolve: { blogs: blogsResolver }, component: BlogsComponent },
    { path: 'welcome/blogs/blog/:id', resolve: { blogs: blogResolver }, component: BlogDetailPageComponent },
    {
        path: 'organisations', component: OrganisationPageComponent, children: [
            { path: '', resolve: { organisations: organisationsResolver }, component: OrganisationListComponent, pathMatch: 'full' },
            { path: 'details/:_id', resolve:{organisation: organisationResolver}, component: OrganisationDetailComponent }
        ]
    }
];