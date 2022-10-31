import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.type';
import { TodosService } from './todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styles: [
  ]
})
export class TodolistComponent implements OnInit {

  // todos!: Array<Todo>
  todos!:Observable<Array<Todo>>

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
    //subscriber
    // this.todoService.getTodos().subscribe({
    //   next: todos => {
    //     this.todos = todos
    //   },
    //   error: err => {
    //     console.log(err)
    //   },
    //   complete: () => {
    //     console.log('complete event is called')
    //   }
    // })
  }

}
