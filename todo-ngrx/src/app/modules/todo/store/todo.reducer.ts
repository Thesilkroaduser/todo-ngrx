import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

import * as TodoActions from './todo.actions';

import {Todo} from "../models/todo.models";

export const TODO_REDUCER = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: [] as Todo[],
}

export const getTodoState = createFeatureSelector<TodoState>(TODO_REDUCER);

export const todoReducer = createReducer<TodoState>(
  initialState,
  on(TodoActions.createTodo, (state, { title }) => ({
    ...state,
    idIncrement: state.idIncrement + 1,
    todoList: [
      ...state.todoList,
      {
        id: state.idIncrement,
        completed: false,
        title,
      }
    ],

  }))
);

export const getTodoList = createSelector(
  getTodoState,
  (state) => state.todoList,
);
