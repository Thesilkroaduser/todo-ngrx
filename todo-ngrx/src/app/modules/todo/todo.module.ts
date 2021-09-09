import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER, todoReducer} from "./store/todo.reducer";
import { TodoPageComponent } from './todo-page/todo-page.component';
import {TodoRoutingModule} from "./todo-routing.module";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';


@NgModule({
  declarations: [
    TodoPageComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(TODO_REDUCER, todoReducer),
  ]
})
export class TodoModule { }
