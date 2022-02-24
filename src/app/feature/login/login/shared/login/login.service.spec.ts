import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';



describe('LoginService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,Router]
    });
  });


});
