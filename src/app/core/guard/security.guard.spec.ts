import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SecurityGuard } from './security.guard';

describe('SecurityGuard', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SecurityGuard]
    });
    
  });

  it('should ...', inject([SecurityGuard], (guard: SecurityGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('debe validar con Token...',inject([SecurityGuard], (guard: SecurityGuard) => {
    guard.token = '123456789'
    const validator = guard.validateToken(guard.token);
    expect(validator).toBeTrue();
  }));

  it('debe validar sin Token...',inject([SecurityGuard], (guard: SecurityGuard) => {
    const validator = guard.validateToken(guard.token);
    expect(validator).toBeFalse();
  }));

  it('debe validar canActivate con Token...',inject([SecurityGuard], (guard: SecurityGuard) => {
    guard.token = '123456789'
    const validator = guard.canActivate();
    expect(validator).toBeTrue();
  }));

  it('debe validar canActivate sin Token...',inject([SecurityGuard], (guard: SecurityGuard) => {
    localStorage.setItem('token','null') 
    const validator = guard.canActivate()
    const token = guard.token
    expect(token).toEqual('null') && expect(validator).toBeFalse();
  }));


});
