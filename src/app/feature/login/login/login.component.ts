import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from './shared/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  public formLogin: FormGroup;
  error = '';
  token: string;
  

  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    public loginService : LoginService
  ) {
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group(
      {
        email:['', [Validators.required]],
        password:['',[Validators.required]]
      });
    this.validateToken();
  }

  validateToken(){
    this.token = localStorage.getItem('token');
    if (this.token){
      this.redirectUsers();
      return true;
    }
    return false;
  }

  login(data? ) {
   data = this.formLogin.value
   this.loginService.loginUser(data).subscribe(
     resp => {
      if (resp[0]?.token || resp?.token ) {
        localStorage.setItem('token', resp.token);
        this.token =  resp.token;
        this.redirectUsers();
        return true;
      }else{
        this.error = 'User/password incorrect';
        return false;
      }
     }
   )
}

  public redirectUsers() {
   // this.router.navigateByUrl('/home');
  }

  getCurrentRouterPath(): Array<string> {
    return this.router.url.split('/').filter(path => path);
  }

}
