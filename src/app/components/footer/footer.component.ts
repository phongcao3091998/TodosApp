import { Component, OnInit } from '@angular/core';
import { FilterButton, Filter } from 'src/app/models/filtering.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  filterButton: FilterButton[] = [
    {
      type: Filter.All, label: 'All', isActive: true
    },
    {
      type: Filter.Active, label: 'Active', isActive: false
    },
    {
      type: Filter.Completed, label: 'Completed', isActive: false
    }
  ];

  lenghtOfTodoListItem = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getLenghtOfListTodoContent();
  }

  getLenghtOfListTodoContent() {
    this.todoService.lengthSubject$.subscribe(val => this.lenghtOfTodoListItem = val);
  }

}
