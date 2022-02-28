import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  // canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   const token = localStorage.getItem('token');
  //   this.validateToken(token);
    return true;
  }

  validateToken(token: string): any {
    if (!token){
      this.router.navigate(['/login']);
    }
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
