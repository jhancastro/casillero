import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '@home/home.component';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';
import {LoginService} from './shared/login/login.service';


const testUrl = 'home';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let activateRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,
         RouterTestingModule.withRoutes(
           [{path: testUrl, component: HomeComponent}]
         ),
         FormsModule,
         ReactiveFormsModule
        ],
      declarations: [ LoginComponent ],
      providers:[LoginService,
       /* { 
          provide: RouterTestingModule, useValue: {url: testUrl } 
        }*/
      ],schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    activateRoute = TestBed.inject(ActivatedRoute);
    console.log(activateRoute)
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de validar inicio cuando no existe token', () => {
    localStorage.clear();
    const validador = component.validateToken();
    expect(validador).toBeFalse();
  });

  it('Debe de validar login exitoso desde loginUsers', () => {
    spyOn(component.loginService,'loginUser').and.callFake(()=>of(
        {
            id: 1,
            email: 'jhancas@gmail.com',
            password: '12345678',
            token: 'qawsedrftgyhuj'
        }
     ));
    
    const email = component.formLogin.controls['email']; 
    const password = component.formLogin.controls['password'];
    email.setValue('jhancas@gmail.com');
    password.setValue('12345678');
    //expect(component.loginService.loginUser(component.formLogin.value)).toBeTrue();
    component.login();
    expect(component.token).toBe('qawsedrftgyhuj');
  });

  it('Debe de validar login exitoso desde login', () => {
    spyOn(component.loginService,'loginUser').and.callFake(()=>of(
        {
            id: 1,
            email: 'jhancas@gmail.com',
            password: '12345678',
            token: 'qawsedrftgyhuj'
        }
     ));
    
    const email = component.formLogin.controls['email']; 
    const password = component.formLogin.controls['password'];
    email.setValue('jhancas@gmail.com');
    password.setValue('12345678');
    //expect(component.loginService.loginUser(component.formLogin.value)).toBeTrue();
    component.login();
    expect(component.token).toBe('qawsedrftgyhuj');
  });

  it('Debe de validar login fallido desde loginUsers', () => {
    spyOn(component.loginService,'loginUser').and.callFake(()=>of(
        {
            id: 1,
            email: 'jhancas@gmail.com',
            password: '123456789',
            token: ''
        }
     ));
    
    const email = component.formLogin.controls['email']; 
    const password = component.formLogin.controls['password'];
    email.setValue('jhancas@gmail.com');
    password.setValue('12345678');
    component.login()
    expect(component.error).toBe('User/password incorrect');
  });

  it('Debe de validar login fallido desde loginUsers - sin token', () => {
    spyOn(component.loginService,'loginUser').and.callFake(()=>of(
        {
            id: 1,
            email: 'jhancas@gmail.com',
            password: '123456789',
            token: undefined
        }
     ));
    
    const email = component.formLogin.controls['email']; 
    const password = component.formLogin.controls['password'];
    email.setValue('jhancas@gmail.com');
    password.setValue('12345678');
    component.login()
    expect(component.error).toBe('User/password incorrect');
  });

});
