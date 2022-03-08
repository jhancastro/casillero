import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from 'src/app/feature/login/login/login.component';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes(
        [{path:'login', component: LoginComponent}]
      )
      ],
      declarations: [ ToolbarComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de remover item token', () => {
    component.logout();
    const token = localStorage.getItem('token');
    expect(token).toBeNull();

  });


});
