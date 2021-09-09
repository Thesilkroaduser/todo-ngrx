import {Action, createReducer, on} from "@ngrx/store";

import * as TodoActions from './todo.actions';

import {Todo} from "../models/todo.models";

export const TODO_REDUCER = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: [],
}

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
