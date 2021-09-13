import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER, todoReducer} from "./store/todo.reducer";
import { TodoPageComponent } from './todo-page/todo-page.component';
import {TodoRoutingModule} from "./todo-routing.module";
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from "./ui/todo-form/todo-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { TodoListComponent } from './ui/todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(TODO_REDUCER, todoReducer),
  ]
})
export class TodoModule { }
