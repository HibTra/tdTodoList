import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent {
localS = localStorage.getItem("token");

  constructor(public ts: TodoService, private router: Router){}

  signOut(){
    localStorage.removeItem("token")
    this.router.navigateByUrl('/signIn')
    window.location.reload()
  }

 
}
