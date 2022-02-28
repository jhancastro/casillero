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
  minL = 8;

  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private loginService : LoginService
  ) {
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group(
      {
        email:['', [Validators.required]],
        password:['',[Validators.required,Validators.minLength(this.minL)]]
      });

    const token = localStorage.getItem('token');
    if (token){
      this.redirectUsers();
    }

  }

  async login(){
    try {
      const resp = await this.loginService.login(this.formLogin.value);
      if (resp[0]?.token) {
        localStorage.setItem('token', resp.token);
        this.redirectUsers();
      }else{
        this.error = 'User/password incorrect';
      }
    }catch (e) {
      this.error = 'User/password incorrect';
      return false;
    }
    
  }

  public redirectUsers(): void {
    this.router.navigateByUrl('/home');
  }

}
