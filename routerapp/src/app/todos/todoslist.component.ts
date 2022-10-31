import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.type';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todoslist.component.html',
})
export class TodoListComponent implements OnInit {

  todos!: Observable<Todo[]>
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }

}
