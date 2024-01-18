import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {

  transform(todo: Todo): string {
    let today=new Date ()
    let todoDate=new Date(todo.date) 
    if (todoDate.getTime()-today.getTime()<=2*3600*24*1000)
    return '2px solid red' ;

    return 'none';
  }

}
