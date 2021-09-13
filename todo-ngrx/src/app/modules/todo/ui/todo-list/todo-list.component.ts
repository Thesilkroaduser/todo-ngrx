import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../models/todo.models";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoItems: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
