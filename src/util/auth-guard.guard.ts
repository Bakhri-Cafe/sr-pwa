import { inject } from '@angular/core';
import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { UserService } from '../app/service/microservice/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const router = inject(Router)
  if(!userService.isLoggedIn){
    router.navigate(['auth']);
  }
  return !!userService.isLoggedIn;
};

export const noAuthGuard: CanActivateFn = (route, state) => {  
  return !authGuard(route, state);
};


// export const noAuthChildGuard: CanActivateChildFn = (route, state) => {
//   return noAuthGuard(route, state);
// };