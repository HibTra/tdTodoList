import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(private fb: FormBuilder, private authS:UserService, private router: Router){}

  authForm = this.fb.group(
    {
      login: ['',Validators.required],
      password: ['',Validators.required]
    }
  )

  checkLogin(){
    if(this.authForm.value.login && this.authForm.value.password)
     this.authS.getUser(this.authForm.value.login, this.authForm.value.password)
    .subscribe(result => {
      if(result.length){
        localStorage.setItem("token", result[0].token)
        this.router.navigateByUrl('')
      }
      else
         alert("Login ou password incorrectes")
    })
  }
}
