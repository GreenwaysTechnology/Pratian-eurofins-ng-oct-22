import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseUrl = 'http://localhost:3000/todos'

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl)
  }
  public getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/${id}`)
  }
}
