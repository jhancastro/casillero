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
    private loginService : LoginService
  ) {
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group(
      {
        email:['', [Validators.required]],
        password:['',[Validators.required]]
      });
    this.validateToken()
  }

  validateToken(){
    this.token = localStorage.getItem('token');
    if (this.token){
      this.redirectUsers();
      return true;
    }
    return false;
  }

  async login(){
    try {
      const resp = await this.loginService.login(this.formLogin.value);
      if (resp[0]?.token) {
        localStorage.setItem('token', resp.token);
        this.redirectUsers();
        return true;
      }else{
        this.error = 'User/password incorrect';
        return false;
      }
    }catch (e) {
      this.error = 'User/password incorrect';
      return false;
    }
    
  }

  public redirectUsers() {
    this.router.navigateByUrl('/home');
  }

  getCurrentRouterPath(): Array<string> {
    console.log(this.router.url.split('/').filter(path => path))
    return this.router.url.split('/').filter(path => path);
  }

}
