import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  isHovered = false;
  isEditMode = false;
  @Input() todoItem: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  changeTodoStatus() {
    console.log(this.todoItem.id);
    this.todoService.changeTodoStatus(this.todoItem.id, !this.todoItem.isCompleted);
  }


}
