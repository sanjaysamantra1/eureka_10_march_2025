import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  if(userService.getUserRole() == 'admin') {
    return true
  } else {
    alert("Sorry you are not authorized to access this URL!")
    return false;
  }
};
