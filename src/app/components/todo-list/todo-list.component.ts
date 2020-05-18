import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getListOfTodoContent();
  }

  getListOfTodoContent() {
    this.todoList = this.todoService.toDos$;
  }



}
