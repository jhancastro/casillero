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
     this.token = localStorage.getItem('token');
     if (this.validateToken(this.token)){
      return true;
     }
     return false;
  }

  validateToken(token: string){
    if (!token){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
