import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.type';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styles: [
  ]
})
export class TododetailsComponent implements OnInit {

  @Input()
  todos!: Observable<Array<Todo>>
  constructor() { }

  ngOnInit(): void {
  }

}
