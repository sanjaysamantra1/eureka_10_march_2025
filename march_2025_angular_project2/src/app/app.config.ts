import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/reducers/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './ngrx/reducers/todo.reducer';
import { provideEffects } from '@ngrx/effects';
import { EmployeeEffects } from './ngrx/effects/employee.effects';
import { employeesReducer } from './ngrx/reducers/employee.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ count: counterReducer, todoArr: todoReducer, employees:employeesReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(EmployeeEffects)
]
};
