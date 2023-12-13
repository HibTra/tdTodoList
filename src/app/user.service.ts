import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(login: string, pwd:string): Observable<User[]>{
     /*return this.http.get<User[]>("http://localhost:3000/users").pipe(
      map(users => users.filter(user => user.login === login && user.password==pwd))
     )*/
     let params = new HttpParams().set("login",login).set("password",pwd)
     return this.http.get<User[]>("http://localhost:3000/users",{params})
  }
}
