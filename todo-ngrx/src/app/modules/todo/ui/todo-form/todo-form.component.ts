import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { BtnConfig } from "../../../../shared/models/shared.models";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Output() createTodoItem = new EventEmitter<string>();

  titlePlaceholder = 'Enter title';
  titleControl: FormControl;
  okBtnConfig: BtnConfig = {
    btnName: 'Ok',
    successBtnType: true,
  };
  // deleteBtnConfig: BtnConfig = {
  //   btnName: 'Delete',
  //   dangerBtnType: true,
  // };

  constructor() { }

  ngOnInit(): void {
    this.titleControl = new FormControl(
      '',
      [
        Validators.required,
        Validators.maxLength(100),
      ],
    );
  }

  onCreate(event: Event): void {
    event.preventDefault();
    this.createTodoItem.emit(this.titleControl.value);
    this.titleControl.reset();
  }
}
