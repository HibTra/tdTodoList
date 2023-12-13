import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  showTodoDialog = false

  showUpdateDialog = false

  showAddDialog = false

  constructor(private http: HttpClient) { }

  getToDoList(): Observable<Todo[]>{
    return this.http.get<Todo[]>("http://localhost:3000/todos");
  }

  deleteTodo(todo: Todo): Observable<Todo[]>{
    return this.http.delete<Todo[]>(`http://localhost:3000/todos/${todo.id}`)
   }
  
  getTodoById(todo: Todo): Observable<Todo>{
    return this.http.get<Todo>(`http://localhost:3000/todos/${todo.id}`);
  }

  updateTodo(todo : Todo): Observable<Todo>{
    return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}`,todo);
  }

  addTodo(todo : Todo): Observable<Todo[]>{
    return this.http.post<Todo[]>(`http://localhost:3000/todos/`,todo);
  }
}
