import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  isHovered = false;
  isEditMode = false;
  isCheck = true;
  @Input() todoItem: Todo;
  constructor() { }

  ngOnInit(): void {
  }

  checkCompleted() {
    console.log(this.todoItem.isCompleted = true);
  }

  onHover(): void {
    console.log('Hover Me');
  }

}
