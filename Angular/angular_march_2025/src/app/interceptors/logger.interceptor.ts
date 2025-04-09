import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log('Im Logger Interceptor between api calls...');
  return next(req);
};
