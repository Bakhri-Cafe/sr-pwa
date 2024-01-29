import { Routes } from '@angular/router';
import { WelcomeComponent } from './component/page/welcome/welcome.component';
import { BlogsComponent } from './component/page/blogs/blogs.component';
import { WelcomeResolver, blogResolver, blogsResolver, organisationResolver, organisationsResolver } from '../util/resolver';
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
import { authGuard, noAuthGuard } from '../util/auth-guard.guard';


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
        path: 'auth', component: AuthPageComponent, children: [
            { path: '', pathMatch: 'full', canActivate: [noAuthGuard], component: SignInComponent },
            { path: 'signup', component: SignUpComponent, canActivate: [noAuthGuard], },
            { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [noAuthGuard], },
            { path: 'change-password', component: ChangePasswordComponent, canActivate: [noAuthGuard], },
        ]
    },
    { path: 'admin', component: AdminPageComponent, canActivate: [authGuard] },
    { path: '**', component: NotFoundComponent }
];