import { TestBed } from '@angular/core/testing';

    import { TokenInterceptor } from "./token-interceptor";

describe('TokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptor
      ]
  }));

  it('se debe de crear correctamente ...', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });


});
