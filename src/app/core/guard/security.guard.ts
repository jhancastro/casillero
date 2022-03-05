import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
token: string;
  constructor(private router: Router) {
  }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return true;
  }

  validateToken(token: string){
    if (!token){
      const urlLogin = '';
      this.router.navigate([urlLogin]);
      return true;
    }
    return false;
  }

  public logout() {
    localStorage.clear();
    const urlHome = '/home';
    this.router.navigate([urlHome]);
    return true;
  }

}
