import { Routes } from '@angular/router';
import { WelcomeComponent } from './component/page/welcome/welcome.component';
import { BlogsComponent } from './component/page/blogs/blogs.component';
import { WelcomeResolver, blogResolver, blogsResolver, organisationResolver, organisationsResolver, typesResolver } from '../util/resolver';
import { BlogDetailPageComponent } from './component/page/blog-detail-page/blog-detail-page.component';
import { OrganisationPageComponent } from './component/page/organisation-page/organisation-page.component';
import { OrganisationListComponent } from './component/organisation/organisation-list/organisation-list.component';
import { OrganisationDetailComponent } from './component/organisation/organisation-detail/organisation-detail.component';
import { NotFoundComponent } from './component/page/not-found/not-found.component';
import { AuthPageComponent } from './component/page/auth-page/auth-page.component';
import { SignInComponent } from './component/auth/sign-in/sign-in.component';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './component/auth/change-password/change-password.component';
import { AdminPageComponent } from './component/page/admin-page/admin-page.component';
import { authChildrenGuard, noAuthChildrenGuard } from '../util/auth-guard.guard';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { CreateBlogComponent } from './component/admin/create-blog/create-blog.component';
import { ListTypeComponent } from './component/type/list-type/list-type.component';


export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', resolve: { blogs: WelcomeResolver }, component: WelcomeComponent },
    { path: 'welcome/blogs/:blogType', resolve: { blogs: blogsResolver }, component: BlogsComponent },
    { path: 'welcome/blogs/blog/:id', resolve: { blogs: blogResolver }, component: BlogDetailPageComponent },
    {
        path: 'organisations', component: OrganisationPageComponent, children: [
            { path: '', resolve: { organisations: organisationsResolver }, component: OrganisationListComponent, pathMatch: 'full' },
            { path: 'details/:_id', resolve: { organisation: organisationResolver }, component: OrganisationDetailComponent }
        ]
    },
    {
        path: 'auth', component: AuthPageComponent, canActivateChild: [noAuthChildrenGuard], children: [
            { path: '', pathMatch: 'full', component: SignInComponent },
            { path: 'signup', component: SignUpComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'change-password', component: ChangePasswordComponent },
        ]
    },
    {
        path: 'admin', component: AdminPageComponent, canActivateChild: [authChildrenGuard], children: [
            { path: '', component: DashboardComponent, pathMatch: 'full' },
            { path: 'blogs-list', resolve: { blogs: WelcomeResolver }, component: WelcomeComponent },
            { path: 'blogs-list/blogs/:blogType', resolve: { blogs: blogsResolver }, component: BlogsComponent },
            { path: 'blogs/create',  component: CreateBlogComponent },
            { path: 'blogs-list/blogs/blog/:id', resolve: { blog: blogResolver }, component: CreateBlogComponent },
            { path: 'blogs-list/blogs/:blogType/blogs/blog/:id', redirectTo:'blogs-list/blogs/blog/:id' },

            {path:'type', component: ListTypeComponent,  resolve: { types: typesResolver }},
        ]
    },
    { path: '**', component: NotFoundComponent }
];