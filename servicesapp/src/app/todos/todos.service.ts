import { Injectable } from '@angular/core';
import { Observable, from, of, take, map, filter, takeLast, catchError, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Todo } from './todo.type';
import { TODO } from './todos.mock';

@Injectable({
  providedIn: 'root' //Root injector will create instance of Service
})
export class TodosService {

  baseUrl = "http://localhost:3000/todos"

  constructor(private http: HttpClient) { }

  //sync service
  //methods
  public getTodos_(): Array<Todo> {
    return TODO
  }
  //async service:Observable 
  //Represents a stream,or source of data that can arrive over period of time.

  public getTodos__(): Observable<Array<Todo>> {
    // return new Observable(observer => {
    //   observer.next(TODO) // next emits event called data
    //   observer.complete() // complete emits  event called complete 
    // })
    //using operator
    return of(TODO);
  }

  //get todos from the rest api server
  public getTodos(): Observable<Todo[]> {

    return this.http.get<Todo[]>(this.baseUrl).pipe(
      map(todos => todos.filter(todo => todo.completed)),
      catchError(err => of(this.fallback()))
    )
  }

  private fallback() {
    return [{
      "userId": 0,
      "id": 0,
      "title": "delectus aut autem",
      "completed": false
    }]
  }


}
