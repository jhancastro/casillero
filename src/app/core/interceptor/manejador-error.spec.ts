import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ManejadorError } from './manejador-error';

describe('LockerService', () => {
  let service: ManejadorError;

  beforeEach(() => {
    service = new ManejadorError();
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,Router],
      schemas: [NO_ERRORS_SCHEMA]
    });
    //service = TestBed.inject(LockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
