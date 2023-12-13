import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {

  @Input() todo!: Todo;

  faCheck= faCheck

  constructor(public ts: TodoService){}

  updateDone(todo : Todo){
    todo.done = !todo.done
    this.ts.updateTodo(todo).subscribe(res => this.todo= res)
  }

}
