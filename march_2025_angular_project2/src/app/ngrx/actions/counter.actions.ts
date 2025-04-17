import { createAction } from '@ngrx/store';

export const increment = createAction('this is an action to increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');