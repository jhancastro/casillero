import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from 'src/app/feature/login/login/login.component';
import { SecurityGuard } from './security.guard';

const testUrl = 'login';
describe('SecurityGuard', () => {
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(
        [{path: testUrl, component: LoginComponent}]
      )
      ],
      providers: [SecurityGuard],
      schemas:[NO_ERRORS_SCHEMA]
    });
  });

  it('should ...', inject([SecurityGuard], (guard: SecurityGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('debe validar con Token...',inject([SecurityGuard], (guard: SecurityGuard) => {
    guard.token = '123456789'
    const validator = guard.validateToken(guard.token);
    expect(validator).toBeFalse();
  }));

  it('debe validar sin Token...',inject([SecurityGuard], (guard: SecurityGuard) => {
    const validator = guard.validateToken(guard.token);
    expect(validator).toBeTrue();
  }));
});


