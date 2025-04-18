import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const teacherGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
   if (userService.getUserRole() == 'teacher') {
     return true;
   } else {
     alert('Sorry!! This page is not for you.')
     return false;
   }
};
