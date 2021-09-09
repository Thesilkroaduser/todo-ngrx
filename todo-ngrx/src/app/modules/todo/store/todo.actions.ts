import { createAction, props } from '@ngrx/store';

const actionSource = '[TODO]';

export const createTodo = createAction(
  `${actionSource} Create Todo`,
  props<{ title: string }>(),
);

