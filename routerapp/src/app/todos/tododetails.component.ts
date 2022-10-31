import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from './todo.type';
import { TodosService } from './todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styles: [
  ]
})
export class TododetailsComponent implements OnInit {

  todo!: Todo
  constructor(private todoService: TodosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {
        this.todoService.getTodoById(params['id']).subscribe({
          next: todo => {
            this.todo = todo
          }
        })
      }
    })
  }
  goToTodoView() {
     this.router.navigate(['/todos'])
  }
}
