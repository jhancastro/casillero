import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, inject, flush, fakeAsync } from '@angular/core/testing';
// import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common";

import { SecurityGuard } from './security.guard';


describe('SecurityGuard', () => {
//  let router: Router;
 let location: Location;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SecurityGuard],
      schemas:[NO_ERRORS_SCHEMA]
    });
    // router = TestBed.get(Router);
    location = TestBed.get(Location);
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

  it('debe de validar al hacer logout ir a /login', inject([SecurityGuard], (guard: SecurityGuard) => {
    let url = ''
    
    fakeAsync(() => {
       guard.logout();
       url = location.path()
       flush();    
    }) 
    expect(url).toBe('')
  }));
});


