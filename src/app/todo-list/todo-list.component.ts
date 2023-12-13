import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  faTrash = faTrash;
  faList = faList;
  faPenToSquare = faPenToSquare;

  todolist: Todo[] =[];

  selectedTodo! : Todo

  constructor(public ts: TodoService, private router:Router){
    if(!localStorage.getItem('token'))
       router.navigateByUrl('/signIn')
  }

  ngOnInit(): void{
     this.ts.getToDoList().subscribe(
      response => this.todolist = response
     )
  }

  deleteTodo(todo: Todo){
    this.ts.deleteTodo(todo).subscribe(
      response => {
        this.todolist = response
        this.ngOnInit()
      }
     )
  }

  selectTodo(todo: Todo){
    this.ts.getTodoById(todo).subscribe(res => this.selectedTodo= res)  
  }


}
