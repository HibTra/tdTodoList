import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TodoPipe } from './todo.pipe';
import { TodoDirective } from './todo.directive';
import { TodoService } from './todo.service';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { UserService } from './user.service';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    TodoListComponent,
    TodoDetailComponent,
    TemplateDrivenFormComponent,
    TodoReactiveFormComponent,
    TodoPipe,
    TodoDirective,
    TodoUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/todo-list", pathMatch: "full" },
      { path: "signIn", component: TodoReactiveFormComponent },
      { path: "todo-list", component: TodoListComponent },
    ])
  ],
  providers: [TodoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
