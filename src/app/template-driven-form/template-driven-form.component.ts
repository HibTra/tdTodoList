import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit{
  todo : Todo = {id: 0, title: "", description: "", done: false, date: new Date()}

  constructor(public ts: TodoService){}

  ngOnInit(): void {
    this.ts.getToDoList().subscribe(res => this.id = res.length+1)
  }

id : number =0

  addTodo(todo : Todo){
      this.ts.addTodo({...this.todo, id:this.id}).subscribe(
        res =>window.location.reload()
      )
  }

}
