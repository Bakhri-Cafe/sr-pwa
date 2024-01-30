import { inject } from '@angular/core';
import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { UserService } from '../app/service/microservice/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const router = inject(Router)
  let isLoggedIn: boolean = false
  if (userService.isLoggedIn$) {
    userService.isLoggedIn$.subscribe(res => isLoggedIn = res);
  }
  if (!isLoggedIn) {
    router.navigate(['auth']);
  }
  return !!isLoggedIn;
};

export const noAuthGuard: CanActivateFn = (route, state) => {
  return !authGuard(route, state);
};

export const noAuthChildrenGuard: CanActivateChildFn = (route, state) => {
  return noAuthGuard(route, state);
};