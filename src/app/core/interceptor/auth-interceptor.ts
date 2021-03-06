import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
    ) { }

  intercept(req: HttpRequest<string>, next: HttpHandler):
    Observable<HttpEvent<string>> {

    return next.handle(req).pipe(
      catchError(error => {
        switch (error.status) {
          case UNAUTHORIZED:
            const urlLogin = '/login';
            this.router.navigate([urlLogin]);
            break;
          case FORBIDDEN:
            const urlHome = '/home';
            this.router.navigate([urlHome]);
            break;
          default:
            return throwError(error);
        } 
        return throwError(error);
      })
    );
   }
}
