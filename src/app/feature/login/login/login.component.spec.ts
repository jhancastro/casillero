import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

const testUrl = '/home';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let activateRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,
         RouterTestingModule,
         FormsModule,
         ReactiveFormsModule
        ],
      declarations: [ LoginComponent ],
      providers:[
        { 
          provide: RouterTestingModule, 
          useValue: {
            url: testUrl 
          } 
        }
      ]
    })
    .compileComponents();
    activateRoute = TestBed.inject(ActivatedRoute);
    console.log(activateRoute)
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
*/
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de validar token', () => {
    const validador = component.validateToken()
    expect(validador).toBeFalse();
  });

  it('Debe de validar redirectUsers /home', () => {
  component.redirectUsers()
  const arrayPath = component.getCurrentRouterPath();
  expect(arrayPath).not.toBeNull();
  expect(arrayPath).not.toBeUndefined();
  
  });


});
