import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      return true;
    }
    return false;
  }

  login( ) {
   const data = this.formLogin.value;
   this.loginService.loginUser(data).subscribe(
     resp => {
      if (resp[0]?.token || resp?.token ) {
        localStorage.setItem('token', resp.token);
        this.token =  resp.token;
         const urlLogin = '/home'
         this.router.navigateByUrl(urlLogin);
        return true;
      }else{
        this.error = 'User/password incorrect';
        return false;
      }
     }
   );
}


}
