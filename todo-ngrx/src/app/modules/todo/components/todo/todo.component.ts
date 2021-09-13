import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/todo.actions';
import {Todo} from "../../models/todo.models";
import * as fromTodo from "../../store/todo.reducer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList$: Observable<any> = this.store.select(fromTodo.getTodoList);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onCreate(title: string): void {
    this.store.dispatch(TodoActions.createTodo({ title }));
  }

}
