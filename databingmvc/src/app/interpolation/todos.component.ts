import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.type';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Array<Todo> = [{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  }, {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  }, {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  }, {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
