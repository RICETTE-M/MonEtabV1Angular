import {CanActivateFn} from '@angular/router';
import {UserService} from '../services/user.service';
import {inject} from '@angular/core';
import {Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isAuth = inject(UserService);
  let router = inject(Router);
  if (isAuth && isAuth.isAuthenticated()) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
}
