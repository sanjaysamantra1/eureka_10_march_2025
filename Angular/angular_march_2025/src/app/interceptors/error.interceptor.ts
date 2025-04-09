
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { ToastService } from '../services/toast.service';

/*
Interceptor is a function. Inside interceptor function we cannot have constructor.
So constructor way of dependency injection we can't use inside interceptor.
Another way is inject():
const toastService = inject(ToastService);
*/
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log("Error Interceptor");
  const toastService = inject(ToastService);
  
  return next(req).pipe(catchError((error) => { //If the api call succeeds dont do anything. If it FAILS ...
    toastService.showError(error.message);  // display the toaster
    return EMPTY; // somebody has subscribed, we have to return something or the subscribtion part won't work
  }));
};