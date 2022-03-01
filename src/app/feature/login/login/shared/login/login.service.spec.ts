import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { LoginService } from './login.service';



describe('LoginService', () => {
let service: LoginService;
let httpClientSpy : { get:jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    service = new LoginService(httpClientSpy as any);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,Router]
    });
  });

  it('Debe de crearse correctamente',() =>{
    expect(service).toBeTruthy();
  });

  it('Deberia retornar token (login correcto)', (done:DoneFn) => {
    //Mock de datos
    const input = {
      email:'jhancas@gmail.com',
      password:'12345678',
      id:0,
      token:''
    }
    const mockResult = {
      id : 1,
      email : "jcastro@gmail.com",
      password : "12345678",
      token :"qawsedrftgyhuj1" 
    }
    
    
    httpClientSpy.get.and.returnValue(of(mockResult));
    service.loginUser(input)
    .subscribe(result =>{
      expect(result).toEqual(mockResult)
      done()
    })

  })

});
