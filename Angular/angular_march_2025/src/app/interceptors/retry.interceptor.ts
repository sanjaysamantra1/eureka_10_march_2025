import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log("Retry Interceptor - If call to API fails then retry again!");
  return next(req).pipe(retry(2)); //Calls API again 2 more times after failing in the first attempt
};
